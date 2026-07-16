const START_DATE = new Date('2026-07-16T00:00:00');
const END_DATE = new Date('2027-01-18T00:00:00');
const VIEWED_NOTES_KEY = 'jar_viewed_notes';

const RAW_MESSAGES = `
1. Good morning Evelyn you're the first thing on my mind every single day
2. You're rarer than a great white sighting in cold water and twice as breathtaking
3. I love you more than a fresh box of Legos loves being sorted by color
4. You're my favorite diagnosis chronic incurable love for you
5. Loving you doesn't need a prescription it's just automatic
6. Fun fact sharks have existed for over 400 million years longer than trees you though are one of a kind
7. I love you
8. You build me up better than any Lego set instructions ever could
9. If my heart were an X ray it'd just show your name
10. You're the calm in my ocean even on the choppiest days
11. I love you like sharks love swimming constantly instinctively forever
12. Fun fact Legos are so precisely made that only about 18 in a million bricks fail quality control
13. You're my favorite kind of heart condition you make it race every time
14.  you are the tide I never fight the current pulling me home each night sharks find their way by feeling the deep I find mine by loving you while I sleep
15. I love you Evelyn simple as that
16. You're sharper than a shark's smile and twice as lovable
17. Every day with you feels like snapping the last piece into a Lego masterpiece
18. I'd trade a stethoscope for just one more hour with you
19. You make ordinary days feel like a perfectly built set complete and satisfying
20. Fun fact some sharks can detect a single drop of blood in 25 gallons of water I can sense your presence from a room away
21. tu es la mer que je n'oublie jamais le courant doux qui me ramene toujours comme le requin qui connait son chemin je connais le mien c'est vers ton amour
22. I love you more than words more than bricks more than fact books
23. You're the missing puzzle piece I didn't know I was searching for
24. I love you
25. You're the reason my heart monitor would go off the charts
26. You're proof that some things like sharks and love are just built to last
27. I love you like a well organized Lego bin perfectly happily completely
28. Fun fact hammerhead sharks have nearly 360 degree vision I only need one look at you to fall harder
29. You're my favorite kind of chaos the fun brick scattered on the floor kind
30.  brick by brick I built a life and somewhere in the middle I found you not a piece I was missing but the whole set come true
31. I love you and that's a permanent diagnosis
32. You're stronger than shark cartilage and softer than my heart around you
33. Every conversation with you feels like discovering a new Lego set exciting and full of surprises
34. I love you
35. You're my favorite kind of medicine the one that actually makes everything better
36. Fun fact the human heart beats about 100000 times a day mine skips a few extra every time I see you
37. piece par piece j'ai construit mes jours et au milieu je t'ai trouvee pas un morceau qui manquait mais tout ce que j'ai jamais reve
38. You're the calm current in my ocean of a life
39. I love you more than sharks love the deep blue sea
40. You make my world feel as solid and satisfying as a finished Lego build
41. I love you Evelyn infinitely endlessly always
42. You're rarer than a whale shark sighting and twice as magical
43. Fun fact some Lego sets have over 11000 pieces my love for you has way more pieces than that
44. You're my favorite kind of heartbeat
45. I love you
46. You're sharper smarter and sweeter than anyone I've ever known
47.  my heart keeps time like a steady pulse soft and sure beneath the skin you are the rhythm no doctor could explain just the beat that lets me begin lol
48. You're the missing brick that completes my whole structure
49. I love you like sharks love the ocean it's just where I belong
50. Fun fact a shark's skin is covered in tiny tooth like scales called dermal denticles yours is just soft and perfect
51. You're my favorite prescription for a bad day
52. I love you more than every Lego set combined
53. You're the reason my pulse quickens
54.  mon coeur bat comme une horloge douce sous la peau personne ne le voit tu es le rythme qu'aucun docteur n'explique juste le battement qui me rend droit
55. I love you Evelyn
56. You build my confidence like Legos build castles piece by piece sturdy and strong
57. Fun fact sharks don't have bones their skeletons are made of cartilage my love for you though has a solid foundation
58. You're my favorite kind of butterflies the medical scientific undeniable kind
59. I love you more than the tide loves the shore, hi
60. You make my heart feel like it's finally beating in rhythm
61. I love you
62. You're the calm doctor's voice that makes everything feel okay
63.  deep water keeps its secrets well but not the ones I feel for you plain and simple like a shark in blue I was always meant to find you too
64. gangnam style
65. You're sharper than any scalpel and gentler than any bedside manner
66. I love you more than sharks love warm water
67. You're my favorite kind of forever
68.  l'eau profonde garde bien ses secrets mais pas ceux que je sens pour toi simple comme un requin dans le bleu j'etais fait pour te trouver ma foi
69. I love you Evelyn always and completely
70. You're the missing piece in every set I never knew was incomplete
71. Fun fact great white sharks can detect electrical fields as weak as one billionth of a volt I feel your energy from across the room
72. You're my favorite kind of heartbeat irregularity the good fluttery kind
73. I love you more than words can hold
74. You're stronger than any Lego tower and twice as beautiful
75. I love you, fart
76. You're the reason my whole world feels steady
77. some things are built to last cartilage and Lego and love like ours none of them ask permission to stay they just do quietly for years and hours
78. Fun fact some sharks can live over 400 years like the Greenland shark my love for you will outlast even that
79. You're my favorite kind of medicine no side effects just joy
80. I love you more than the sea loves its sharks
81. You build me up brick by brick every single day
82. certaines choses sont faites pour durer le cartilage les briques et notre amour aucun ne demande la permission de rester ils restent simplement jour apres jour
83. I love you Evelyn
84. You're sharper than a diagnosis and sweeter than the cure
85. Fun fact the Lego company produces about 3 million bricks per hour that's still fewer than the number of reasons I love you
86. You're my favorite kind of forever fact
87. I love you more than sharks love the open ocean
88. You're the calm after every storm
89. hi lol
90. You're my favorite kind of heartbeat, steady strong and always yours
91.  you are the fact I never get tired of learning new every time though I already know I love you plain I love you certain I love you the way the tide loves to flow
92. Fun fact a shark's bite force can reach up to 4000 psi my love for you hits just as hard but way gentler
93. You're the missing brick I didn't know my life needed
94. I love you more than words bricks or fun facts combined
95. You're my favorite prescription pure happiness taken daily
96. tu es le fait que je n'arrete jamais d'apprendre nouveau chaque fois meme si je le sais deja je t'aime simplement je t'aime sans attendre je t'aime comme la maree aime son eclat
97. I love you Evelyn
98. You're sharper kinder and more wonderful than anyone I know
99. Fun fact nurse sharks can rest motionless on the ocean floor unlike most sharks you're the calm I rest in
100. You build my whole world like the sturdiest Lego set
101. I love you more than the moon loves the tide
102. You're my favorite kind of chaos and calm all at once
103. wyd eye emoj eye emoji
104. You're the steady pulse behind every good day
105. Fun fact Legos are so durable that old sets from the 1960s still click perfectly with new ones today our love is built the same way
106. You're my favorite kind of medicine
107. I love you more than sharks love the deep sea trenches
108. You're the missing piece that makes my heart whole
109. I love you Evelyn every single day
110. You're sharper than any scalpel softer than any bandage
111. Fun fact whale sharks despite being the largest fish in the sea are gentle filter feeders you're just as gentle and just as magnificent
112. You're my favorite forever
113. I love you more than words could ever explain
114. You build my confidence brick by brick
115. james time
116. You're the calm current that steadies my whole life
117. Fun fact sharks have been on Earth since before trees existed my love for you feels just as ancient and unshakable
118. You're my favorite kind of heartbeat skip
119. I love you more than the ocean loves its sharks
120. You're stronger and sweeter than anyone I know
121. I love you Evelyn
122. You're the missing Lego piece I never stopped searching for
123. Fun fact some Legos have been found to survive intact after being lost at sea for decades washing ashore years later our love is just as unbreakable
124. You're my favorite kind of medicine
125. I love you more than sharks love the reef
126. You're the steady rhythm behind my every heartbeat
127. I love you
128. You're sharper kinder and more wonderful than anyone else
129. Fun fact a shark's liver can make up nearly a third of its body weight helping it stay buoyant you're what keeps me afloat
130. You're my favorite forever fact
131. I love you more than words bricks or fun facts combined
132. You're the calm after every storm in my life
133. I love you Evelyn
134. You build my whole world one brick at a time
135. Fun fact the human brain generates about 12 to 25 watts of electricity enough to power a small light bulb mine lights up every time I think of you
136. You're my favorite kind of heartbeat
137. I love you more than sharks love warm currents
138. You're the missing piece that completes me
139. I love you
140. You're sharper than any diagnosis and sweeter than the cure
141. Fun fact Legos come in over 60 different colors today none of them compare to the color of your eyes
142. You're my favorite forever
143. I love you more than the tide loves the shore
144. You're the calm current that steadies my every day
145. I love you Evelyn
146. You build my confidence like the sturdiest brick tower
147. Fun fact sharks can go into a trance like state called tonic immobility when flipped upside down you're the only thing that leaves me speechless like that
148. You're my favorite kind of medicine
149. I love you more than words could ever say
150. You're the missing piece in every part of my life
151. I love you
152. You're sharper kinder and more wonderful than anyone else I know
153. Fun fact the Lego Group makes enough bricks each year to circle the Earth more than five times if stacked end to end my love for you circles even further
154. You're my favorite forever fact
155. I love you more than sharks love the deep blue
156. You're the calm after every storm
157. I love you Evelyn
158. You build my whole world brick by brick day by day
159. Fun fact your heart is roughly the size of your fist but it pumps about 2000 gallons of blood a day mine works overtime just thinking about you
160. You're my favorite kind of heartbeat
161. I love you more than sharks love the reef
162. You're the missing piece that makes everything whole
163. I love you
164. You're sharper than any scalpel and softer than any bandage
165. Fun fact some sharks lay eggs called mermaid's purses while others give live birth however love arrives mine found its way straight to you
166. You're my favorite forever
167. I love you more than words bricks or fun facts combined
168. You're the calm current that steadies my whole life
169. I love you Evelyn
170. You build my confidence one brick at a time
171. Fun fact the first Lego minifigure was introduced in 1978 some things like tiny figures and big love just keep getting better
172. You're my favorite kind of medicine
173. I love you more than sharks love warm water
174. You're the missing piece I never stopped looking for
175. I love you
176. You're sharper kinder and more wonderful than anyone I've known
177. Fun fact a shark's teeth can be replaced continuously throughout its life some sharks go through over 30000 teeth my love for you never wears down either
178. You're my favorite forever fact
179. I love you more than words could ever hold
180. You're the calm after every storm in my life
181. I love you Evelyn
182. You build my whole world brick by brick always
183. Fun fact doctors use a stethoscope that was invented in 1816 by Rene Laennec who rolled up paper to listen to a patient's heart I don't need one to hear mine race for you
184. You're my favorite kind of heartbeat
185. I love you more than sharks love the open sea
186. You're the missing piece that completes my every day
187. I love you
188. You're sharper than any diagnosis and sweeter than any cure
189. Fun fact Legos are tested by dropping bricks from height freezing them and even running trucks over them to check durability my love for you has passed every test too
190. You're my favorite forever
191. I love you more than words bricks or fun facts combined
192. You're the calm current that steadies my whole life
193. I love you Evelyn today tomorrow always
194. You build my confidence like the sturdiest Lego creation
195. Fun fact whale sharks can live up to 130 years I plan on loving you for every single one I get
196. I love you Evelyn more than sharks more than Legos more than any fact I could ever share just you
`;

const PREWRITTEN_MESSAGES = RAW_MESSAGES
    .trim()
    .split('\n')
    .map((line) => line.replace(/^\d+\.\s*/, '').trim())
    .filter(Boolean);

const TOTAL_SCHEDULED_DAYS = Math.floor((END_DATE - START_DATE) / (1000 * 60 * 60 * 24)) + 1;

const PREDEFINED_NOTES = Array.from({ length: TOTAL_SCHEDULED_DAYS }, (_, index) => {
    const noteDate = new Date(START_DATE);
    noteDate.setDate(START_DATE.getDate() + index);

    return {
        id: formatDate(noteDate),
        date: formatDate(noteDate),
        title: `Day ${index + 1}`,
        content: PREWRITTEN_MESSAGES[index] || `I love you Evelyn ❤️`,
        color: '#FFE5B4'
    };
});

let allNotes = PREDEFINED_NOTES;
let viewedNotes = new Set();
let currentViewingNote = null;

if (PREWRITTEN_MESSAGES.length !== 196) {
    console.warn(`Expected 196 messages, received ${PREWRITTEN_MESSAGES.length}`);
}
if (PREWRITTEN_MESSAGES.length > TOTAL_SCHEDULED_DAYS) {
    console.warn(`Only first ${TOTAL_SCHEDULED_DAYS} messages are scheduled in the 2026-07-16 to 2027-01-18 window.`);
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadViewedNotes();
    updateDateDisplay();
    updateCountdown();
    updateNoteStatus();
    renderNotes();
    renderGallery();

    setInterval(() => {
        updateDateDisplay();
        updateCountdown();
        updateNoteStatus();
        renderNotes();
        renderGallery();
    }, 60000);
});

function switchTab(tabName, button) {
    document.querySelectorAll('#mainScreen .tab-content').forEach((tab) => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('#mainScreen .nav-btn').forEach((btn) => {
        btn.classList.remove('active');
    });

    document.getElementById(`${tabName}Tab`).classList.add('active');
    if (button) {
        button.classList.add('active');
    }

    if (tabName === 'gallery') {
        renderGallery();
    }
}

function updateDateDisplay() {
    const today = new Date();
    const dateString = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('dateDisplay').textContent = `📅 ${dateString}`;
}

function updateCountdown() {
    const today = getStartOfDay(new Date());
    const daysRemaining = Math.ceil((END_DATE - today) / (1000 * 60 * 60 * 24));

    const countdownEl = document.getElementById('countdownDisplay');
    if (!countdownEl) return;

    if (daysRemaining > 0) {
        countdownEl.textContent = `⏳ ${daysRemaining} days until the final note (January 18, 2027)`;
    } else if (daysRemaining === 0) {
        countdownEl.textContent = '💌 Final note day is here!';
    } else {
        countdownEl.textContent = '📖 All scheduled notes have been unlocked.';
    }
}

function getStartOfDay(date) {
    const copy = new Date(date);
    copy.setHours(0, 0, 0, 0);
    return copy;
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function parseDate(dateStr) {
    return new Date(`${dateStr}T00:00:00`);
}

function isNoteAvailable(note) {
    const noteDate = getStartOfDay(parseDate(note.date));
    const today = getStartOfDay(new Date());
    return noteDate <= today;
}

function getTodayNote() {
    const todayStr = formatDate(getStartOfDay(new Date()));
    return allNotes.find((note) => note.date === todayStr);
}

function updateNoteStatus() {
    const noteStatusEl = document.getElementById('noteStatus');
    const viewTodayBtn = document.getElementById('viewTodayBtn');
    const todayNote = getTodayNote();

    if (!todayNote) {
        noteStatusEl.textContent = '📝 No note is scheduled for today.';
        viewTodayBtn.style.display = 'none';
        return;
    }

    const viewed = viewedNotes.has(todayNote.id);
    if (viewed) {
        noteStatusEl.textContent = `✅ Today's note (Day ${allNotes.indexOf(todayNote) + 1}) is already in your gallery.`;
        viewTodayBtn.style.display = 'inline-block';
        viewTodayBtn.textContent = '📖 Reopen Today\'s Note';
    } else {
        noteStatusEl.textContent = `✨ Today's note is ready to open.`;
        viewTodayBtn.style.display = 'inline-block';
        viewTodayBtn.textContent = '📖 View Today\'s Note';
    }
}

function openTodayNote() {
    const todayNote = getTodayNote();
    if (todayNote) {
        viewNote(todayNote);
    }
}

function viewNote(note) {
    if (!isNoteAvailable(note)) {
        alert('This note unlocks on its scheduled date.');
        return;
    }

    currentViewingNote = note;
    document.getElementById('viewerTitle').textContent = note.title;

    const dateString = parseDate(note.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('viewerDate').textContent = `📅 ${dateString}`;

    const contentEl = document.getElementById('viewerContent');
    contentEl.textContent = note.content;
    contentEl.style.backgroundColor = note.color;
    contentEl.style.padding = '15px';
    contentEl.style.borderRadius = '8px';

    markViewed(note.id);
    document.getElementById('noteViewerModal').classList.add('active');

    updateNoteStatus();
    renderNotes();
    renderGallery();
}

function closeNoteViewer() {
    document.getElementById('noteViewerModal').classList.remove('active');
    currentViewingNote = null;
}

function markViewed(noteId) {
    viewedNotes.add(noteId);
    localStorage.setItem(VIEWED_NOTES_KEY, JSON.stringify([...viewedNotes]));
}

function loadViewedNotes() {
    const saved = localStorage.getItem(VIEWED_NOTES_KEY);
    if (!saved) return;

    try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
            viewedNotes = new Set(parsed);
        }
    } catch {
        viewedNotes = new Set();
    }
}

function renderNotes() {
    const container = document.getElementById('notesContainer');
    container.innerHTML = '';

    const jarNotes = allNotes.filter((note) => isNoteAvailable(note) && !viewedNotes.has(note.id));

    jarNotes.forEach((note) => {
        const noteIcon = document.createElement('div');
        noteIcon.className = 'note-icon';
        noteIcon.style.setProperty('--note-color', note.color);
        noteIcon.innerHTML = `<span>📝</span><div class="note-icon-title">${note.title}</div>`;
        noteIcon.onclick = () => viewNote(note);
        container.appendChild(noteIcon);
    });
}

function renderGallery() {
    const gallery = document.getElementById('galleryGrid');
    gallery.innerHTML = '';

    const openedNotes = allNotes.filter((note) => viewedNotes.has(note.id));

    if (openedNotes.length === 0) {
        gallery.innerHTML = '<div class="gallery-empty">No opened notes yet. Open one from the jar 💕</div>';
        return;
    }

    openedNotes.forEach((note) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        const dateString = parseDate(note.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        item.innerHTML = `
            <div class="gallery-item-color" style="background-color: ${note.color}"></div>
            <div class="gallery-item-title">${note.title}</div>
            <div class="gallery-item-date">${dateString}</div>
        `;

        item.onclick = () => viewNote(note);
        gallery.appendChild(item);
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeNoteViewer();
    }
});
