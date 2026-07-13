
const workouts = {
  1: [
    {day:1,title:"Push and Core",duration:12,focus:"Chest, shoulders, core",exercises:[
      ex("March in Place",40,"highknees","Stand tall and drive the knees upward.","Legs, core","Do not lean backward.","Slow march","High knees"),
      ex("Push-Ups",35,"pushup","Keep a straight line from shoulders to heels.","Chest, triceps, core","Do not let hips sag.","Knee push-up","Tempo push-up"),
      ex("Plank Shoulder Taps",35,"plank","Keep hips square while tapping opposite shoulder.","Core, shoulders","Avoid rocking side to side.","Wide-feet plank","Narrow-feet taps"),
      ex("Dumbbell Shoulder Press",35,"press","Press both 10 lb dumbbells overhead without arching.","Shoulders, triceps","Do not flare ribs.","One arm at a time","Slow lowering"),
      ex("Dead Bug",35,"plank","Lower opposite arm and leg while keeping low back down.","Core","Do not arch your back.","Short range","Long pause"),
      ex("Push-Up Hold",25,"pushup","Hold halfway down with a tight core.","Chest, triceps","Do not shrug shoulders.","High plank hold","Lower hold")
    ]},
    {day:2,title:"Legs and Conditioning",duration:12,focus:"Quads, glutes, conditioning",exercises:[
      ex("Bodyweight Squat",40,"squat","Sit hips back and keep knees tracking over toes.","Quads, glutes","Do not collapse knees inward.","Chair squat","Jump squat"),
      ex("Reverse Lunge",35,"lunge","Step back and lower both knees with control.","Glutes, quads","Do not slam the back knee.","Shallow lunge","Dumbbell lunge"),
      ex("High Knees",35,"highknees","Drive knees quickly while staying tall.","Conditioning, core","Do not lean back.","Fast march","Sprint pace"),
      ex("Glute Bridge",40,"bridge","Drive through heels and squeeze glutes at the top.","Glutes, hamstrings","Do not overarch your back.","Short range","Single-leg bridge"),
      ex("Calf Raises",35,"squat","Rise onto the balls of your feet and pause.","Calves","Do not bounce.","Hold a wall","Single-leg raise"),
      ex("Wall Sit",30,"squat","Hold thighs near parallel and press back into wall.","Quads","Do not place hands on thighs.","Higher position","Hold dumbbells")
    ]},
    {day:3,title:"Back and Arms",duration:12,focus:"Back, biceps, shoulders",exercises:[
      ex("Dumbbell Bent-Over Row",40,"row","Hinge at hips and pull dumbbells toward ribs.","Back, biceps","Do not round your back.","One arm supported","Slow three-second lower"),
      ex("Dumbbell Curl",35,"curl","Keep elbows close and curl without swinging.","Biceps","Do not use momentum.","Alternating curl","Pause at top"),
      ex("Rear Delt Raise",35,"row","Hinge forward and lift arms out with soft elbows.","Rear shoulders, upper back","Do not shrug.","No weight","Slow reps"),
      ex("Superman Pull",35,"plank","Lift chest slightly and pull elbows toward ribs.","Back","Do not crank the neck.","Arms only","Long hold"),
      ex("Hammer Curl",35,"curl","Keep palms facing inward and curl smoothly.","Biceps, forearms","Do not drift elbows forward.","Alternate arms","Slow eccentric"),
      ex("Farmer Carry March",40,"highknees","Hold dumbbells at sides and march tall.","Grip, core, legs","Do not lean.","Static hold","Faster march")
    ]},
    {day:4,title:"Full-Body Military Conditioning",duration:13,focus:"Total body, endurance",exercises:[
      ex("Burpee",30,"burpee","Squat, step or jump back, return, and stand tall.","Full body","Do not rush poor form.","Step-back burpee","Burpee with jump"),
      ex("Mountain Climbers",35,"plank","Drive knees forward while shoulders stay over wrists.","Core, conditioning","Do not bounce hips.","Slow climbers","Cross-body climbers"),
      ex("Dumbbell Thruster",35,"press","Squat, then press dumbbells overhead as you stand.","Legs, shoulders","Do not arch at top.","Squat only","Faster controlled reps"),
      ex("Push-Ups",30,"pushup","Lower chest with control and press away strongly.","Chest, triceps","Do not shorten range.","Knee push-up","Close-grip push-up"),
      ex("Alternating Reverse Lunge",35,"lunge","Step back smoothly and alternate sides.","Legs, balance","Do not wobble through the front knee.","Shallow range","Hold dumbbells"),
      ex("High Knees",35,"highknees","Move quickly while keeping posture tall.","Conditioning","Do not hold your breath.","Fast march","Sprint pace")
    ]},
    {day:5,title:"Upper Body Strength and Core",duration:12,focus:"Chest, shoulders, arms, core",exercises:[
      ex("Pike Push-Up",35,"pushup","Hips high, lower head toward floor, press away.","Shoulders, triceps","Do not collapse through shoulders.","Incline pike","Feet-elevated pike"),
      ex("Dumbbell Floor Press",40,"press","Lie down and press dumbbells above chest.","Chest, triceps","Do not flare elbows too wide.","One arm at a time","Slow lowering"),
      ex("Plank",40,"plank","Brace your whole body and breathe steadily.","Core","Do not let hips sag.","Knee plank","Long-lever plank"),
      ex("Dumbbell Curl to Press",35,"curl","Curl, rotate, and press overhead.","Biceps, shoulders","Do not rush transitions.","Curl only","Slow combo"),
      ex("Side Plank",30,"plank","Stack shoulders and hips while holding a straight line.","Obliques","Do not collapse shoulder.","Bent-knee side plank","Top-leg lift"),
      ex("Push-Up Finisher",25,"pushup","Perform smooth quality reps until time ends.","Chest, triceps","Do not sacrifice form.","Incline push-up","Diamond push-up")
    ]},
    {day:6,title:"Legs, Mobility, and Endurance",duration:12,focus:"Legs, hips, mobility",exercises:[
      ex("Split Squat",35,"lunge","Stay tall and lower straight down.","Quads, glutes","Do not shift too far forward.","Short stance","Hold dumbbells"),
      ex("Dumbbell Romanian Deadlift",40,"row","Push hips back and keep dumbbells close to legs.","Hamstrings, glutes","Do not round your back.","Bodyweight hinge","Single-leg RDL"),
      ex("Glute Bridge",40,"bridge","Squeeze glutes and pause at the top.","Glutes, hamstrings","Do not push through toes.","Short range","Dumbbell on hips"),
      ex("World's Greatest Stretch",35,"lunge","Step to lunge, rotate chest, switch sides.","Hips, spine","Do not force rotation.","Hands elevated","Add hamstring fold"),
      ex("Squat to Calf Raise",35,"squat","Stand from squat and finish tall on toes.","Legs, calves","Do not rush balance.","Separate movements","Add dumbbells"),
      ex("Fast March",40,"highknees","Drive arms and knees at a steady pace.","Endurance","Do not slouch.","Easy march","High knees")
    ]}
  ]
};

function ex(name,seconds,demo,form,muscles,mistake,easier,harder){
  return {name,seconds,demo,form,muscles,mistake,easier,harder, bodyParts: inferBodyParts(name, muscles)};
}
function inferBodyParts(name, muscles){
  const text = `${name} ${muscles}`.toLowerCase();
  const parts = new Set();
  if(/chest|push-up|floor press/.test(text)) parts.add("chest");
  if(/shoulder|deltoid|press|pike/.test(text)) parts.add("shoulders");
  if(/triceps/.test(text)) parts.add("triceps");
  if(/biceps|curl/.test(text)) parts.add("biceps");
  if(/back|row|lat|rhomboid|superman/.test(text)) parts.add("back");
  if(/core|plank|dead bug|mountain climber|oblique/.test(text)) parts.add("core");
  if(/glute|bridge|lunge|squat|deadlift|thruster/.test(text)) parts.add("glutes");
  if(/quad|squat|lunge|wall sit|thruster/.test(text)) parts.add("quads");
  if(/hamstring|deadlift|bridge/.test(text)) parts.add("hamstrings");
  if(/calf|calves|calf raise/.test(text)) parts.add("calves");
  if(/forearm|farmer|grip|hammer curl/.test(text)) parts.add("forearms");
  if(/full body|burpee|conditioning/.test(text)) ["chest","shoulders","core","glutes","quads"].forEach(p=>parts.add(p));
  if(parts.size===0) parts.add("core");
  return [...parts];
}
function bodyMap(parts=[]){
  const active = p => parts.includes(p) ? "active" : "";
  return `<div class="body-map-wrap">
    <div class="body-map-title">BODY PARTS WORKED</div>
    <div class="body-map">
      <svg viewBox="0 0 220 360" role="img" aria-label="Body muscle map">
        <g class="silhouette">
          <circle cx="110" cy="35" r="25"/>
          <rect x="92" y="60" width="36" height="28" rx="14"/>
          <path d="M75 84 Q110 68 145 84 L158 168 Q146 205 132 222 L130 322 L105 322 L101 220 L89 322 L64 322 L68 220 Q54 202 62 168 Z"/>
          <rect x="38" y="92" width="28" height="142" rx="14" transform="rotate(7 52 163)"/>
          <rect x="154" y="92" width="28" height="142" rx="14" transform="rotate(-7 168 163)"/>
        </g>
        <g class="muscles">
          <path class="muscle ${active("shoulders")}" d="M67 93 Q78 77 93 86 L90 112 Q74 112 67 93Z"/>
          <path class="muscle ${active("shoulders")}" d="M127 86 Q143 77 153 94 Q146 112 130 112Z"/>
          <path class="muscle ${active("chest")}" d="M87 96 Q110 86 110 122 Q89 129 79 115Z"/>
          <path class="muscle ${active("chest")}" d="M110 96 Q134 86 141 115 Q130 129 110 122Z"/>
          <path class="muscle ${active("core")}" d="M91 124 H129 L133 190 Q110 205 87 190Z"/>
          <path class="muscle ${active("biceps")}" d="M49 112 Q61 108 66 124 L64 169 Q51 175 45 159Z"/>
          <path class="muscle ${active("biceps")}" d="M154 124 Q159 108 171 112 L175 159 Q169 175 156 169Z"/>
          <path class="muscle ${active("triceps")}" d="M43 165 Q56 158 65 171 L60 214 Q47 218 40 205Z"/>
          <path class="muscle ${active("triceps")}" d="M155 171 Q164 158 177 165 L180 205 Q173 218 160 214Z"/>
          <path class="muscle ${active("forearms")}" d="M40 205 Q51 198 60 214 L56 244 Q44 250 37 235Z"/>
          <path class="muscle ${active("forearms")}" d="M160 214 Q169 198 180 205 L183 235 Q176 250 164 244Z"/>
          <path class="muscle ${active("glutes")}" d="M76 188 Q95 180 108 198 L102 227 Q83 232 70 216Z"/>
          <path class="muscle ${active("glutes")}" d="M112 198 Q125 180 144 188 L150 216 Q137 232 118 227Z"/>
          <path class="muscle ${active("quads")}" d="M69 215 Q91 207 102 229 L98 285 Q78 294 63 275Z"/>
          <path class="muscle ${active("quads")}" d="M118 229 Q129 207 151 215 L157 275 Q142 294 122 285Z"/>
          <path class="muscle ${active("hamstrings")}" d="M67 235 Q84 225 98 245 L96 294 Q79 304 65 286Z"/>
          <path class="muscle ${active("hamstrings")}" d="M122 245 Q136 225 153 235 L155 286 Q141 304 124 294Z"/>
          <path class="muscle ${active("calves")}" d="M66 286 Q80 276 94 291 L91 335 Q76 345 63 328Z"/>
          <path class="muscle ${active("calves")}" d="M126 291 Q140 276 154 286 L157 328 Q144 345 129 335Z"/>
          <path class="muscle ${active("back")}" d="M82 102 Q110 88 138 102 L133 169 Q110 183 87 169Z"/>
        </g>
      </svg>
    </div>
    <div class="body-map-legend">${parts.map(p=>`<span class="tag">${p.replace(/\b\w/g,c=>c.toUpperCase())}</span>`).join("")}</div>
  </div>`;
}
const state = {
  tab:"today",
  week:Number(localStorage.getItem("rmw_week")||1),
  day:Number(localStorage.getItem("rmw_day")||1),
  completed:JSON.parse(localStorage.getItem("rmw_completed")||"[]"),
  notes:localStorage.getItem("rmw_notes")||"",
  duration:Number(localStorage.getItem("rmw_duration")||12),
  sound:localStorage.getItem("rmw_sound")!=="false",
  vibration:localStorage.getItem("rmw_vibration")!=="false",
  player:null
};
function save(){
  localStorage.setItem("rmw_week",state.week);
  localStorage.setItem("rmw_day",state.day);
  localStorage.setItem("rmw_completed",JSON.stringify(state.completed));
  localStorage.setItem("rmw_notes",state.notes);
  localStorage.setItem("rmw_duration",state.duration);
  localStorage.setItem("rmw_sound",state.sound);
  localStorage.setItem("rmw_vibration",state.vibration);
}
function currentWorkout(){
  return (workouts[1]||[]).find(w=>w.day===state.day) || workouts[1][0];
}
function rank(){
  const n=state.completed.length;
  if(n<6) return "Recruit";
  if(n<18) return "Private";
  if(n<36) return "Corporal";
  return "Sergeant";
}
function streak(){
  return Math.min(state.completed.length,99);
}
function render(){
  const app=document.getElementById("app");
  app.innerHTML = `<div class="app-shell">
    <div class="topbar"><div class="brand">RONNY'S MILITARY WORKOUT</div><div class="rank-pill">${rank()}</div></div>
    <main>${state.player ? playerView() : tabView()}</main>
  </div>${state.player?"":nav()}`;
  wire();
}
function nav(){
  return `<nav class="bottom-nav">
    ${navBtn("today","⌂","Today")}
    ${navBtn("program","▦","Program")}
    ${navBtn("progress","◎","Progress")}
    ${navBtn("settings","⚙","Settings")}
  </nav>`;
}
function navBtn(tab,icon,label){
  return `<button class="nav-btn ${state.tab===tab?"active":""}" data-tab="${tab}"><span>${icon}</span>${label}</button>`;
}
function tabView(){
  if(state.tab==="program") return programView();
  if(state.tab==="progress") return progressView();
  if(state.tab==="settings") return settingsView();
  return todayView();
}
function todayView(){
  const w=currentWorkout();
  return `<section class="hero">
    <div class="eyebrow">Daily mission</div>
    <h1>${w.title}</h1>
    <p class="muted">${w.focus}</p>
    <div class="stats">
      <div class="stat"><span class="muted small">Time</span><strong>${w.duration}m</strong></div>
      <div class="stat"><span class="muted small">Week</span><strong>${state.week}</strong></div>
      <div class="stat"><span class="muted small">Day</span><strong>${state.day}</strong></div>
    </div>
    <button class="primary" id="start">BEGIN MISSION</button>
  </section>
  <section class="section">
    <div class="row"><h2>Mission briefing</h2><span class="tag">Intermediate</span></div>
    <div class="card">
      <p><strong>Objective:</strong> Build strength, conditioning, and consistency in under 15 minutes.</p>
      <p class="muted small">Equipment: bodyweight and optional 10 lb dumbbells.</p>
    </div>
    <div class="week-grid">${[1,2,3,4,5,6,7].map(d=>`<div class="day-dot ${state.completed.includes(`${state.week}-${d}`)?"done":""} ${d===state.day?"today":""}">D${d}</div>`).join("")}</div>
  </section>
  <section class="section">
    <h2>Today's exercises</h2>
    ${w.exercises.map((e,i)=>exerciseCard(e,i)).join("")}
  </section>`;
}
function exerciseCard(e,i){
  return `<div class="card">
    <div class="row"><div><strong>${i+1}. ${e.name}</strong><div class="muted small">${e.seconds} sec</div></div><span class="tag">${e.muscles}</span></div>
    <p class="small" style="margin-top:10px">${e.form}</p>
    ${bodyMap(e.bodyParts)}
  </div>`;
}
function programView(){
  return `<section class="hero">
    <div class="eyebrow">12 week campaign</div>
    <h1>Program map</h1>
    <p class="muted">Weeks 1 to 4 foundation, Weeks 5 to 8 strength and conditioning, Weeks 9 to 12 military performance.</p>
  </section>
  <section class="section">
    ${Array.from({length:12},(_,i)=>i+1).map(w=>`<div class="card">
      <div class="row"><div><strong>Week ${w}</strong><div class="muted small">${w<=4?"Foundation":w<=8?"Strength and conditioning":"Military performance"}</div></div>
      <button class="secondary" data-week="${w}" style="width:auto;padding:10px 14px">${w===state.week?"Active":"Select"}</button></div>
    </div>`).join("")}
  </section>`;
}
function progressView(){
  const pct=Math.min(100,Math.round(state.completed.length/72*100));
  return `<section class="hero">
    <div class="eyebrow">Performance report</div>
    <h1>${state.completed.length} missions complete</h1>
    <p class="muted">Current rank: ${rank()}</p>
    <div class="progressbar"><div style="width:${pct}%"></div></div>
    <p class="small muted" style="margin-top:8px">${pct}% of the 12-week campaign</p>
  </section>
  <section class="section">
    <div class="stats">
      <div class="stat"><span class="muted small">Streak</span><strong>${streak()}</strong></div>
      <div class="stat"><span class="muted small">Weeks</span><strong>${Math.floor(state.completed.length/6)}</strong></div>
      <div class="stat"><span class="muted small">Score</span><strong>${Math.min(100,40+state.completed.length)}</strong></div>
    </div>
    <div class="card">
      <label>Training notes</label>
      <textarea id="notes" placeholder="Energy, soreness, results...">${state.notes}</textarea>
    </div>
  </section>`;
}
function settingsView(){
  return `<section class="hero">
    <div class="eyebrow">Preferences</div>
    <h1>Settings</h1>
    <p class="muted">Adjust how your missions run.</p>
  </section>
  <section class="section">
    <div class="card">
      <label>Preferred workout length</label>
      <select id="duration"><option ${state.duration===10?"selected":""}>10</option><option ${state.duration===12?"selected":""}>12</option><option ${state.duration===15?"selected":""}>15</option></select>
    </div>
    <div class="card row"><div><strong>Sound coach</strong><div class="muted small">Countdown and transitions</div></div><input id="sound" type="checkbox" ${state.sound?"checked":""} style="width:auto"></div>
    <div class="card row"><div><strong>Vibration</strong><div class="muted small">Exercise change alerts</div></div><input id="vibration" type="checkbox" ${state.vibration?"checked":""} style="width:auto"></div>
    <div class="card notice"><strong>Safety notice:</strong> Stop if you feel sharp pain, dizziness, chest pain, or unusual shortness of breath. Exercise within your ability and speak with a qualified medical professional if you have health concerns.</div>
    <button class="danger" id="reset">RESET PROGRESS</button>
  </section>`;
}
function playerView(){
  const p=state.player,w=p.workout,e=w.exercises[p.index];
  return `<section>
    <div class="row"><button class="secondary" id="exit" style="width:auto;padding:10px 14px">Exit</button><span class="tag">Round 1</span></div>
    <div class="exercise-demo demo-${e.demo}"><div class="stick"><div class="head"></div><div class="body"></div><div class="arm left"></div><div class="arm right"></div><div class="leg left"></div><div class="leg right"></div></div></div>
    ${bodyMap(e.bodyParts)}
    <div class="eyebrow">Exercise ${p.index+1} of ${w.exercises.length}</div>
    <h1>${e.name}</h1>
    <p class="muted">${e.form}</p>
    <div class="timer">${String(p.remaining).padStart(2,"0")}</div>
    <div class="progressbar"><div style="width:${100-(p.remaining/e.seconds*100)}%"></div></div>
    <div class="controls" style="margin-top:14px">
      <button class="secondary" id="back">Back</button>
      <button class="primary" id="pause">${p.paused?"Resume":"Pause"}</button>
      <button class="secondary" id="skip">Skip</button>
    </div>
    <div class="card" style="margin-top:16px">
      <div><span class="tag">${e.muscles}</span></div>
      <p class="small"><strong>Avoid:</strong> ${e.mistake}</p>
      <p class="small"><strong>Easier:</strong> ${e.easier}</p>
      <p class="small"><strong>Harder:</strong> ${e.harder}</p>
    </div>
  </section>`;
}
function speak(text){
  if(!state.sound || !("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}
function startPlayer(){
  const w=currentWorkout();
  state.player={workout:w,index:0,remaining:w.exercises[0].seconds,paused:false,timer:null};
  speak(`Mission begins. ${w.exercises[0].name}`);
  tickStart();render();
}
function tickStart(){
  clearInterval(state.player?.timer);
  state.player.timer=setInterval(()=>{
    if(!state.player || state.player.paused) return;
    state.player.remaining--;
    if(state.player.remaining===10) speak("Ten seconds");
    if(state.player.remaining<=0) nextExercise();
    else render();
  },1000);
}
function nextExercise(){
  const p=state.player;
  if(!p) return;
  if(p.index>=p.workout.exercises.length-1){
    clearInterval(p.timer);
    const key=`${state.week}-${state.day}`;
    if(!state.completed.includes(key)) state.completed.push(key);
    save();
    speak("Mission complete");
    state.player=null;
    alert("MISSION COMPLETE");
    if(state.day<7) state.day++; else {state.day=1;state.week=Math.min(12,state.week+1);}
    save();render();return;
  }
  p.index++;
  p.remaining=p.workout.exercises[p.index].seconds;
  if(state.vibration && navigator.vibrate) navigator.vibrate(120);
  speak(`Next exercise. ${p.workout.exercises[p.index].name}`);
  render();
}
function wire(){
  document.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>{state.tab=b.dataset.tab;render()});
  document.querySelectorAll("[data-week]").forEach(b=>b.onclick=()=>{state.week=Number(b.dataset.week);save();render()});
  const start=document.getElementById("start"); if(start) start.onclick=startPlayer;
  const pause=document.getElementById("pause"); if(pause) pause.onclick=()=>{state.player.paused=!state.player.paused;render()};
  const skip=document.getElementById("skip"); if(skip) skip.onclick=nextExercise;
  const back=document.getElementById("back"); if(back) back.onclick=()=>{if(state.player.index>0){state.player.index--;state.player.remaining=state.player.workout.exercises[state.player.index].seconds;render()}};
  const exit=document.getElementById("exit"); if(exit) exit.onclick=()=>{clearInterval(state.player.timer);state.player=null;render()};
  const notes=document.getElementById("notes"); if(notes) notes.oninput=e=>{state.notes=e.target.value;save()};
  const duration=document.getElementById("duration"); if(duration) duration.onchange=e=>{state.duration=Number(e.target.value);save()};
  const sound=document.getElementById("sound"); if(sound) sound.onchange=e=>{state.sound=e.target.checked;save()};
  const vibration=document.getElementById("vibration"); if(vibration) vibration.onchange=e=>{state.vibration=e.target.checked;save()};
  const reset=document.getElementById("reset"); if(reset) reset.onclick=()=>{if(confirm("Reset all progress?")){localStorage.clear();location.reload()}};
}
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("service-worker.js"));
render();
