// Constants
const VIEWED_NOTES_KEY = 'jar_viewed_notes';

let currentViewingNote = null;
let allNotes = [];
let viewedNotes = new Set(); // dates the user has already opened

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadNotes();
    updateDateDisplay();
    updateCountdown();
    updateNoteStatus();
    renderNotes();
    renderGallery();
    
    // Update countdown every minute
    setInterval(() => {
        updateCountdown();
        renderNotes();
        renderGallery();
    }, 60000);
});

// ============== TAB NAVIGATION ==============

function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('#mainScreen .tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all nav buttons
    document.querySelectorAll('#mainScreen .nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName + 'Tab').classList.add('active');
    
    // Add active class to clicked button
    event.target.closest('.nav-btn').classList.add('active');
    
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

function updateCountdown() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const cutoffDate = new Date('2027-01-18');
    cutoffDate.setHours(0, 0, 0, 0);
    
    const daysRemaining = Math.ceil((cutoffDate - today) / (1000 * 60 * 60 * 24));
    
    const countdownEl = document.getElementById('countdownDisplay');
    if (countdownEl) {
        if (daysRemaining > 0) {
            countdownEl.textContent = `⏳ The jar seals in ${daysRemaining} days (January 18th, 2027)`;
        } else if (daysRemaining === 0) {
            countdownEl.textContent = '🔒 The jar seals TODAY!';
        } else {
            countdownEl.textContent = '🔐 The jar has been sealed. No new notes can be added.';
        }
    }
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
        if (viewedNotes.has(todayNote.date)) {
            noteStatusEl.textContent = `✅ Today's note has been opened! Find it in the Gallery. 🎀`;
            viewTodayBtn.style.display = 'none';
        } else {
            noteStatusEl.textContent = `✨ Today's note: "${todayNote.title}"`;
            viewTodayBtn.style.display = 'inline-block';
        }
    } else {
        noteStatusEl.textContent = '📅 No note available yet today. Check back later!';
        viewTodayBtn.style.display = 'none';
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
    
    const noteDateObj = parseDate(note.date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = noteDateObj.toLocaleDateString('en-US', options);
    document.getElementById('viewerDate').textContent = `📅 ${dateString}`;
    
    document.getElementById('viewerContent').textContent = note.content;
    document.getElementById('viewerContent').style.backgroundColor = note.color;
    document.getElementById('viewerContent').style.padding = '15px';
    document.getElementById('viewerContent').style.borderRadius = '8px';
    
    // Mark as viewed the first time the note is opened
    if (!viewedNotes.has(note.date)) {
        viewedNotes.add(note.date);
        saveViewedNotes();
    }
    
    document.getElementById('noteViewerModal').classList.add('active');
}

function closeNoteViewer() {
    document.getElementById('noteViewerModal').classList.remove('active');
    currentViewingNote = null;
    // Re-render so newly-viewed notes move from jar to gallery
    renderNotes();
    renderGallery();
    updateNoteStatus();
}

// ============== JAR RENDERING ==============

function renderNotes() {
    const container = document.getElementById('notesContainer');
    container.innerHTML = '';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Show notes that are accessible (date ≤ today) AND not yet viewed
    const jarNotes = allNotes.filter(note => {
        const noteDate = parseDate(note.date);
        noteDate.setHours(0, 0, 0, 0);
        return noteDate <= today && !viewedNotes.has(note.date);
    });

    jarNotes.forEach(note => {
        const noteIcon = document.createElement('div');
        noteIcon.className = 'note-icon';
        noteIcon.style.setProperty('--note-color', note.color);
        noteIcon.innerHTML = `
            <span>📝</span>
            <div class="note-icon-title">${note.title}</div>
        `;
        noteIcon.onclick = () => viewNote(note);
        container.appendChild(noteIcon);
    });
}

// ============== GALLERY ==============

function renderGallery() {
    const gallery = document.getElementById('galleryGrid');
    gallery.innerHTML = '';
    
    // Show only notes the user has already opened
    const galleryNotes = allNotes.filter(note => viewedNotes.has(note.date));
    
    if (galleryNotes.length === 0) {
        gallery.innerHTML = '<div class="gallery-empty">No notes yet. Open a note from the jar to see it here! 🎀</div>';
        return;
    }
    
    galleryNotes.forEach(note => {
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

// ============== DATA MANAGEMENT ==============

function saveViewedNotes() {
    localStorage.setItem(VIEWED_NOTES_KEY, JSON.stringify([...viewedNotes]));
}

function loadNotes() {
    // Use the predefined bundle as the single source of truth.
    allNotes = PREDEFINED_NOTES.slice();

    // Load per-user viewed state.
    const viewed = localStorage.getItem(VIEWED_NOTES_KEY);
    try {
        viewedNotes = viewed ? new Set(JSON.parse(viewed)) : new Set();
    } catch (e) {
        viewedNotes = new Set();
    }
}

// ============== KEYBOARD SHORTCUTS ==============

document.addEventListener('keydown', (e) => {
    // Press Escape to close modals
    if (e.key === 'Escape') {
        document.getElementById('noteViewerModal').classList.remove('active');
    }
});
