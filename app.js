// Constants
const CUTOFF_DATE = new Date('2027-01-18');
const PASSWORD_KEY = 'jar_password';
const NOTES_KEY = 'jar_notes';
const JAR_COLOR_KEY = 'jar_color';
const ACCENT_COLOR_KEY = 'accent_color';

let currentViewingNote = null;
let allNotes = [];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadNotes();
    updateDateDisplay();
    updateNoteStatus();
    renderNotes();
    renderGallery();
    
    // Set default date in note editor to today
    document.getElementById('noteDate').valueAsDate = new Date();
    
    // Check if password exists
    const hasPassword = localStorage.getItem(PASSWORD_KEY);
    if (!hasPassword) {
        document.getElementById('lockScreen').classList.add('active');
        document.getElementById('mainScreen').classList.remove('active');
    } else {
        document.getElementById('lockScreen').classList.remove('active');
        document.getElementById('mainScreen').classList.add('active');
    }
    
    // Apply saved theme
    applyTheme();
});

// ============== PASSWORD & AUTHENTICATION ==============

function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const savedPassword = localStorage.getItem(PASSWORD_KEY);
    
    if (!input) {
        alert('Please enter a password');
        return;
    }
    
    if (savedPassword && input === savedPassword) {
        document.getElementById('lockScreen').classList.remove('active');
        document.getElementById('mainScreen').classList.add('active');
        document.getElementById('passwordInput').value = '';
    } else {
        alert('Incorrect password');
    }
}

function setPassword() {
    const newPassword = document.getElementById('passwordSetting').value;
    
    if (!newPassword) {
        alert('Please enter a password');
        return;
    }
    
    if (newPassword.length < 4) {
        alert('Password must be at least 4 characters');
        return;
    }
    
    localStorage.setItem(PASSWORD_KEY, newPassword);
    document.getElementById('passwordSetting').value = '';
    alert('Password saved successfully!');
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        document.getElementById('mainScreen').classList.remove('active');
        document.getElementById('lockScreen').classList.add('active');
        document.getElementById('passwordInput').value = '';
        document.getElementById('passwordInput').focus();
    }
}

// ============== TAB NAVIGATION ==============

function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName + 'Tab').classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Refresh gallery when switching to gallery tab
    if (tabName === 'gallery') {
        renderGallery();
    }
}

// ============== DATE MANAGEMENT ==============

function updateDateDisplay() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-US', options);
    document.getElementById('dateDisplay').textContent = `📅 ${dateString}`;
}

function getNoteForDate(date) {
    const dateStr = formatDate(date);
    return allNotes.find(note => note.date === dateStr);
}

function getTodayNote() {
    return getNoteForDate(new Date());
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function parseDate(dateStr) {
    return new Date(dateStr + 'T00:00:00');
}

// ============== NOTE STATUS ==============

function updateNoteStatus() {
    const todayNote = getTodayNote();
    const noteStatusEl = document.getElementById('noteStatus');
    const viewTodayBtn = document.getElementById('viewTodayBtn');
    
    if (todayNote) {
        noteStatusEl.textContent = `✨ Today's note: "${todayNote.title}"`;
        viewTodayBtn.style.display = 'inline-block';
    } else {
        noteStatusEl.textContent = '📝 No note for today yet. Add one to brighten your day!';
        viewTodayBtn.style.display = 'none';
    }
}

// ============== NOTE EDITOR ==============

function openNoteEditor() {
    // Check if cutoff date has passed
    const today = new Date();
    if (today > CUTOFF_DATE) {
        alert('The jar has been sealed as of January 18th, 2027. No new notes can be added.');
        return;
    }
    
    // Check if note already exists for selected date
    const selectedDateInput = document.getElementById('noteDate').value;
    const existingNote = allNotes.find(note => note.date === selectedDateInput);
    
    if (existingNote) {
        if (confirm(`A note already exists for ${selectedDateInput}. Do you want to edit it?`)) {
            document.getElementById('noteTitle').value = existingNote.title;
            document.getElementById('noteContent').value = existingNote.content;
            document.getElementById('noteColor').value = existingNote.color;
        }
    } else {
        // Clear form for new note
        document.getElementById('noteTitle').value = '';
        document.getElementById('noteContent').value = '';
        document.getElementById('noteColor').value = '#FFE5B4';
    }
    
    document.getElementById('noteEditorModal').classList.add('active');
}

function closeNoteEditor() {
    document.getElementById('noteEditorModal').classList.remove('active');
}

function saveNote() {
    const date = document.getElementById('noteDate').value;
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;
    const color = document.getElementById('noteColor').value;
    
    // Validation
    if (!date || !title || !content) {
        alert('Please fill in all fields');
        return;
    }
    
    // Check cutoff date
    const noteDate = parseDate(date);
    if (noteDate > CUTOFF_DATE) {
        alert('You cannot add notes after January 18th, 2027');
        return;
    }
    
    // Check if note already exists for this date
    const existingIndex = allNotes.findIndex(note => note.date === date);
    
    if (existingIndex !== -1) {
        // Update existing note
        allNotes[existingIndex] = {
            date,
            title,
            content,
            color,
            createdAt: allNotes[existingIndex].createdAt,
            updatedAt: new Date().toISOString()
        };
    } else {
        // Create new note
        allNotes.push({
            date,
            title,
            content,
            color,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    }
    
    // Sort notes by date
    allNotes.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    saveNotes();
    renderNotes();
    updateNoteStatus();
    renderGallery();
    closeNoteEditor();
    alert('Note saved! 🎉');
}

function deleteCurrentNote() {
    if (confirm('Are you sure you want to delete this note?')) {
        const dateToDelete = currentViewingNote.date;
        allNotes = allNotes.filter(note => note.date !== dateToDelete);
        saveNotes();
        renderNotes();
        updateNoteStatus();
        renderGallery();
        closeNoteViewer();
        alert('Note deleted');
    }
}

// ============== NOTE VIEWING ==============

function openTodayNote() {
    const todayNote = getTodayNote();
    if (todayNote) {
        viewNote(todayNote);
    }
}

function viewNote(note) {
    // Check if note should be accessible
    const noteDate = parseDate(note.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    noteDate.setHours(0, 0, 0, 0);
    
    if (noteDate > today) {
        alert('This note is not available yet. It will be accessible on its date!');
        return;
    }
    
    currentViewingNote = note;
    document.getElementById('viewerTitle').textContent = note.title;
    
    const noteDate = parseDate(note.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = noteDate.toLocaleDateString('en-US', options);
    document.getElementById('viewerDate').textContent = `📅 ${dateString}`;
    
    document.getElementById('viewerContent').textContent = note.content;
    document.getElementById('viewerContent').style.backgroundColor = note.color;
    document.getElementById('viewerContent').style.padding = '15px';
    document.getElementById('viewerContent').style.borderRadius = '8px';
    
    document.getElementById('noteViewerModal').classList.add('active');
}

function closeNoteViewer() {
    document.getElementById('noteViewerModal').classList.remove('active');
    currentViewingNote = null;
}

// ============== JAR RENDERING ==============

function renderNotes() {
    const container = document.getElementById('notesContainer');
    container.innerHTML = '';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    allNotes.forEach(note => {
        const noteDate = parseDate(note.date);
        noteDate.setHours(0, 0, 0, 0);
        
        // Only show notes that are today or in the past
        if (noteDate <= today) {
            const noteIcon = document.createElement('div');
            noteIcon.className = 'note-icon';
            noteIcon.style.setProperty('--note-color', note.color);
            noteIcon.innerHTML = `
                <span>📝</span>
                <div class="note-icon-title">${note.title}</div>
            `;
            noteIcon.onclick = () => viewNote(note);
            container.appendChild(noteIcon);
        }
    });
}

// ============== GALLERY ==============

function renderGallery() {
    const gallery = document.getElementById('galleryGrid');
    gallery.innerHTML = '';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Get all notes that have been opened (past today or today)
    const accessibleNotes = allNotes.filter(note => {
        const noteDate = parseDate(note.date);
        noteDate.setHours(0, 0, 0, 0);
        return noteDate <= today;
    });
    
    if (accessibleNotes.length === 0) {
        gallery.innerHTML = '<div class="gallery-empty">No notes yet. Add one and they\'ll appear here! 🎀</div>';
        return;
    }
    
    accessibleNotes.forEach(note => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const noteDate = parseDate(note.date);
        const dateString = noteDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        
        item.innerHTML = `
            <div class="gallery-item-color" style="background-color: ${note.color}"></div>
            <div class="gallery-item-title">${note.title}</div>
            <div class="gallery-item-date">${dateString}</div>
        `;
        
        item.onclick = () => viewNote(note);
        gallery.appendChild(item);
    });
}

// ============== THEME CUSTOMIZATION ==============

function changeJarColor() {
    const color = document.getElementById('themeColor').value;
    const jarBody = document.querySelector('.jar-body');
    
    // Remove all color classes
    jarBody.classList.remove('color-blue', 'color-green', 'color-pink', 'color-amber');
    
    // Add selected color class
    if (color !== 'default') {
        jarBody.classList.add('color-' + color);
    }
    
    localStorage.setItem(JAR_COLOR_KEY, color);
}

function changeAccentColor() {
    const color = document.getElementById('accentColor').value;
    document.documentElement.style.setProperty('--accent-color', color);
    localStorage.setItem(ACCENT_COLOR_KEY, color);
}

function applyTheme() {
    // Apply jar color
    const jarColor = localStorage.getItem(JAR_COLOR_KEY) || 'default';
    document.getElementById('themeColor').value = jarColor;
    changeJarColor();
    
    // Apply accent color
    const accentColor = localStorage.getItem(ACCENT_COLOR_KEY) || '#667eea';
    document.getElementById('accentColor').value = accentColor;
    changeAccentColor();
}

// ============== DATA MANAGEMENT ==============

function saveNotes() {
    localStorage.setItem(NOTES_KEY, JSON.stringify(allNotes));
}

function loadNotes() {
    const saved = localStorage.getItem(NOTES_KEY);
    allNotes = saved ? JSON.parse(saved) : [];
}

function exportData() {
    const data = {
        notes: allNotes,
        exportedAt: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `evelyns-jar-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

function clearAllData() {
    if (confirm('Are you ABSOLUTELY sure? This will delete all notes permanently!')) {
        if (confirm('Last chance - this cannot be undone!')) {
            localStorage.removeItem(NOTES_KEY);
            allNotes = [];
            renderNotes();
            updateNoteStatus();
            renderGallery();
            alert('All data cleared');
        }
    }
}

// ============== KEYBOARD SHORTCUTS ==============

document.addEventListener('keydown', (e) => {
    // Press Enter in password field to login
    if (e.key === 'Enter' && document.getElementById('lockScreen').classList.contains('active')) {
        checkPassword();
    }
    
    // Press Escape to close modals
    if (e.key === 'Escape') {
        document.getElementById('noteEditorModal').classList.remove('active');
        document.getElementById('noteViewerModal').classList.remove('active');
    }
});

// ============== DATE LIMIT INFO ==============

function showCutoffInfo() {
    const today = new Date();
    const daysRemaining = Math.ceil((CUTOFF_DATE - today) / (1000 * 60 * 60 * 24));
    
    if (daysRemaining > 0) {
        console.log(`📅 You can add notes until January 18th, 2027 (${daysRemaining} days remaining)`);
    } else {
        console.log('🔒 The jar has been sealed. No new notes can be added.');
    }
}

// Show cutoff info on load
showCutoffInfo();

// Update time every minute for real-time date changes
setInterval(() => {
    renderNotes();
    renderGallery();
}, 60000);
