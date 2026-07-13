
const workouts = [
  {day:1,title:"Push and Core",focus:"Chest, shoulders, triceps, core",duration:12,exercises:[
    ex("March in Place",40,"highknees","Stand tall and drive the knees upward.","Legs, core","Do not lean backward.","Slow march","High knees"),
    ex("Push-Ups",35,"pushup","Keep a straight line from shoulders to heels.","Chest, triceps, core","Do not let hips sag.","Knee push-up","Tempo push-up"),
    ex("Plank Shoulder Taps",35,"plank","Keep hips square while tapping opposite shoulder.","Core, shoulders","Avoid rocking side to side.","Wide-feet plank","Narrow-feet taps"),
    ex("Dumbbell Shoulder Press",35,"press","Press both 10 lb dumbbells overhead without arching.","Shoulders, triceps","Do not flare ribs.","One arm at a time","Slow lowering"),
    ex("Dead Bug",35,"plank","Lower opposite arm and leg while keeping low back down.","Core","Do not arch your back.","Short range","Long pause"),
    ex("Push-Up Hold",25,"pushup","Hold halfway down with a tight core.","Chest, triceps","Do not shrug shoulders.","High plank hold","Lower hold")
  ]},
  {day:2,title:"Legs and Conditioning",focus:"Quads, glutes, hamstrings, calves",duration:12,exercises:[
    ex("Bodyweight Squat",40,"squat","Sit hips back and keep knees tracking over toes.","Quads, glutes","Do not collapse knees inward.","Chair squat","Jump squat"),
    ex("Reverse Lunge",35,"lunge","Step back and lower both knees with control.","Glutes, quads","Do not slam the back knee.","Shallow lunge","Dumbbell lunge"),
    ex("High Knees",35,"highknees","Drive knees quickly while staying tall.","Conditioning, core","Do not lean back.","Fast march","Sprint pace"),
    ex("Glute Bridge",40,"bridge","Drive through heels and squeeze glutes at the top.","Glutes, hamstrings","Do not overarch your back.","Short range","Single-leg bridge"),
    ex("Calf Raises",35,"squat","Rise onto the balls of your feet and pause.","Calves","Do not bounce.","Hold a wall","Single-leg raise"),
    ex("Wall Sit",30,"squat","Hold thighs near parallel and press back into wall.","Quads","Do not place hands on thighs.","Higher position","Hold dumbbells")
  ]},
  {day:3,title:"Back and Arms",focus:"Back, biceps, shoulders, grip",duration:12,exercises:[
    ex("Dumbbell Bent-Over Row",40,"row","Hinge at hips and pull dumbbells toward ribs.","Back, biceps","Do not round your back.","One arm supported","Slow three-second lower"),
    ex("Dumbbell Curl",35,"curl","Keep elbows close and curl without swinging.","Biceps","Do not use momentum.","Alternating curl","Pause at top"),
    ex("Rear Delt Raise",35,"row","Hinge forward and lift arms out with soft elbows.","Rear shoulders, upper back","Do not shrug.","No weight","Slow reps"),
    ex("Superman Pull",35,"plank","Lift chest slightly and pull elbows toward ribs.","Back","Do not crank the neck.","Arms only","Long hold"),
    ex("Hammer Curl",35,"curl","Keep palms facing inward and curl smoothly.","Biceps, forearms","Do not drift elbows forward.","Alternate arms","Slow eccentric"),
    ex("Farmer Carry March",40,"highknees","Hold dumbbells at sides and march tall.","Grip, core, legs","Do not lean.","Static hold","Faster march")
  ]},
  {day:4,title:"Military Conditioning",focus:"Full body and endurance",duration:13,exercises:[
    ex("Burpee",30,"burpee","Squat, step or jump back, return, and stand tall.","Full body","Do not rush poor form.","Step-back burpee","Burpee with jump"),
    ex("Mountain Climbers",35,"plank","Drive knees forward while shoulders stay over wrists.","Core, conditioning","Do not bounce hips.","Slow climbers","Cross-body climbers"),
    ex("Dumbbell Thruster",35,"press","Squat, then press dumbbells overhead as you stand.","Legs, shoulders","Do not arch at top.","Squat only","Faster controlled reps"),
    ex("Push-Ups",30,"pushup","Lower chest with control and press away strongly.","Chest, triceps","Do not shorten range.","Knee push-up","Close-grip push-up"),
    ex("Alternating Reverse Lunge",35,"lunge","Step back smoothly and alternate sides.","Legs, balance","Do not wobble through the front knee.","Shallow range","Hold dumbbells"),
    ex("High Knees",35,"highknees","Move quickly while keeping posture tall.","Conditioning","Do not hold your breath.","Fast march","Sprint pace")
  ]},
  {day:5,title:"Upper Body Strength",focus:"Chest, shoulders, arms, core",duration:12,exercises:[
    ex("Pike Push-Up",35,"pushup","Hips high, lower head toward floor, press away.","Shoulders, triceps","Do not collapse through shoulders.","Incline pike","Feet-elevated pike"),
    ex("Dumbbell Floor Press",40,"press","Lie down and press dumbbells above chest.","Chest, triceps","Do not flare elbows too wide.","One arm at a time","Slow lowering"),
    ex("Plank",40,"plank","Brace your whole body and breathe steadily.","Core","Do not let hips sag.","Knee plank","Long-lever plank"),
    ex("Dumbbell Curl to Press",35,"curl","Curl, rotate, and press overhead.","Biceps, shoulders","Do not rush transitions.","Curl only","Slow combo"),
    ex("Side Plank",30,"plank","Stack shoulders and hips while holding a straight line.","Obliques","Do not collapse shoulder.","Bent-knee side plank","Top-leg lift"),
    ex("Push-Up Finisher",25,"pushup","Perform smooth quality reps until time ends.","Chest, triceps","Do not sacrifice form.","Incline push-up","Diamond push-up")
  ]},
  {day:6,title:"Legs and Mobility",focus:"Legs, hips, mobility, endurance",duration:12,exercises:[
    ex("Split Squat",35,"lunge","Stay tall and lower straight down.","Quads, glutes","Do not shift too far forward.","Short stance","Hold dumbbells"),
    ex("Dumbbell Romanian Deadlift",40,"row","Push hips back and keep dumbbells close to legs.","Hamstrings, glutes","Do not round your back.","Bodyweight hinge","Single-leg RDL"),
    ex("Glute Bridge",40,"bridge","Squeeze glutes and pause at the top.","Glutes, hamstrings","Do not push through toes.","Short range","Dumbbell on hips"),
    ex("World's Greatest Stretch",35,"lunge","Step to lunge, rotate chest, switch sides.","Hips, spine","Do not force rotation.","Hands elevated","Add hamstring fold"),
    ex("Squat to Calf Raise",35,"squat","Stand from squat and finish tall on toes.","Legs, calves","Do not rush balance.","Separate movements","Add dumbbells"),
    ex("Fast March",40,"highknees","Drive arms and knees at a steady pace.","Endurance","Do not slouch.","Easy march","High knees")
  ]}
];
function ex(name,seconds,demo,form,muscles,mistake,easier,harder){
  return {
    name,seconds,demo,form,muscles,mistake,easier,harder,
    bodyParts:inferBodyParts(name,muscles),
    coaching:exerciseCoaching(name,form,muscles)
  }
}
function exerciseCoaching(name,form,muscles){
  const key=name.toLowerCase();
  const library={
    "dead bug":{
      purpose:"Build deep core control and teach your abdominal muscles to stabilize your spine while your arms and legs move.",
      setup:"Lie on your back. Point both arms toward the ceiling. Bend your hips and knees to about 90 degrees. Gently press your lower back into the floor.",
      steps:[
        "Tighten your stomach as though someone is about to tap you in the abdomen.",
        "Slowly lower your right arm behind your head while extending your left leg.",
        "Stop before your lower back lifts from the floor.",
        "Return to the starting position, then repeat with the opposite arm and leg."
      ],
      feel:"You should feel your abdominal muscles working. You should not feel pressure or pain in your lower back."
    },
    "push-ups":{
      purpose:"Build strength in your chest, triceps, front shoulders, and core.",
      setup:"Place your hands slightly wider than shoulder width. Keep your body in one straight line from head to heels.",
      steps:["Lower your chest toward the floor with control.","Keep your elbows angled slightly backward.","Press the floor away until your arms are straight."],
      feel:"You should feel your chest, triceps, front shoulders, and abdominal muscles."
    },
    "plank shoulder taps":{
      purpose:"Build core stability while strengthening your shoulders.",
      setup:"Begin in a high plank with your feet slightly wider than hip width.",
      steps:["Brace your core.","Lift one hand and tap the opposite shoulder.","Place the hand down and repeat on the other side.","Keep your hips as still as possible."],
      feel:"You should feel your abs and shoulders working."
    },
    "dumbbell shoulder press":{
      purpose:"Build shoulder and triceps strength.",
      setup:"Stand tall with one 10 lb dumbbell in each hand at shoulder height.",
      steps:["Tighten your core.","Press both dumbbells overhead.","Finish with your arms straight without locking the elbows.","Lower the dumbbells slowly to shoulder height."],
      feel:"You should feel your shoulders and triceps."
    },
    "march in place":{
      purpose:"Warm up your body and prepare your hips, legs, and core.",
      setup:"Stand tall with your feet under your hips.",
      steps:["Lift one knee toward hip height.","Swing the opposite arm naturally.","Alternate sides at a steady pace."],
      feel:"You should feel warm and slightly out of breath."
    },
    "push-up hold":{
      purpose:"Increase chest, triceps, shoulder, and core endurance.",
      setup:"Begin in a strong push-up position.",
      steps:["Lower about halfway toward the floor.","Hold your body in one straight line.","Keep breathing while maintaining tension."],
      feel:"You should feel your chest, triceps, shoulders, and core working."
    }
  };
  return library[key] || {
    purpose:`Train your ${muscles.toLowerCase()} with controlled movement and proper form.`,
    setup:"Start in the position shown. Stand or lie tall, brace your core, and prepare to move with control.",
    steps:[form,"Move slowly enough to maintain control.","Return to the starting position and repeat."],
    feel:`You should mainly feel your ${muscles.toLowerCase()} working. Stop if you feel sharp pain.`
  };
}
function exerciseVisual(e){
  const pose=e.demo;
  const horizontal=["pushup","plank","bridge"].includes(pose);
  const poseClass=horizontal?"horizontal":"standing";
  return `<div class="premium-demo ${poseClass} demo-${pose}">
    <div class="demo-panel">
      <span>START</span>
      <svg viewBox="0 0 150 210" aria-label="${e.name} starting position">
        <g class="athlete pose-start">
          <circle cx="75" cy="28" r="16"/>
          <path d="M64 47 Q75 40 86 47 L91 105 Q83 121 75 129 Q67 121 59 105Z"/>
          <path d="M61 58 L34 103 L44 110 L70 75Z"/>
          <path d="M89 58 L116 103 L106 110 L80 75Z"/>
          <path d="M68 124 L50 190 L64 194 L77 137Z"/>
          <path d="M82 124 L100 190 L86 194 L73 137Z"/>
        </g>
      </svg>
    </div>
    <div class="motion-arrow">➜</div>
    <div class="demo-panel">
      <span>MOVE</span>
      <svg viewBox="0 0 150 210" aria-label="${e.name} movement position">
        <g class="athlete pose-end">
          <circle cx="75" cy="28" r="16"/>
          <path d="M64 47 Q75 40 86 47 L91 105 Q83 121 75 129 Q67 121 59 105Z"/>
          <path d="M61 58 L34 103 L44 110 L70 75Z"/>
          <path d="M89 58 L116 103 L106 110 L80 75Z"/>
          <path d="M68 124 L50 190 L64 194 L77 137Z"/>
          <path d="M82 124 L100 190 L86 194 L73 137Z"/>
        </g>
      </svg>
    </div>
  </div>`;
}
function inferBodyParts(name,muscles){
  const t=`${name} ${muscles}`.toLowerCase(),p=new Set();
  if(/chest|push-up|floor press/.test(t)) p.add("chest");
  if(/shoulder|deltoid|press|pike/.test(t)) p.add("shoulders");
  if(/triceps/.test(t)) p.add("triceps");
  if(/biceps|curl/.test(t)) p.add("biceps");
  if(/back|row|lat|rhomboid|superman/.test(t)) p.add("back");
  if(/core|plank|dead bug|mountain climber|oblique/.test(t)) p.add("core");
  if(/glute|bridge|lunge|squat|deadlift|thruster/.test(t)) p.add("glutes");
  if(/quad|squat|lunge|wall sit|thruster/.test(t)) p.add("quads");
  if(/hamstring|deadlift|bridge/.test(t)) p.add("hamstrings");
  if(/calf|calves/.test(t)) p.add("calves");
  if(/forearm|farmer|grip|hammer curl/.test(t)) p.add("forearms");
  if(/full body|burpee/.test(t)) ["chest","shoulders","core","glutes","quads"].forEach(x=>p.add(x));
  if(!p.size)p.add("core"); return [...p];
}
const state={
  tab:"today",
  week:Number(localStorage.getItem("rmw_week")||1),
  day:Number(localStorage.getItem("rmw_day")||1),
  completed:JSON.parse(localStorage.getItem("rmw_completed")||"[]"),
  notes:localStorage.getItem("rmw_notes")||"",
  sound:localStorage.getItem("rmw_sound")!=="false",
  vibration:localStorage.getItem("rmw_vibration")!=="false",
  splash:true,
  player:null
};
function save(){localStorage.setItem("rmw_week",state.week);localStorage.setItem("rmw_day",state.day);localStorage.setItem("rmw_completed",JSON.stringify(state.completed));localStorage.setItem("rmw_notes",state.notes);localStorage.setItem("rmw_sound",state.sound);localStorage.setItem("rmw_vibration",state.vibration)}
function currentWorkout(){return workouts.find(w=>w.day===state.day)||workouts[0]}
function rank(){const n=state.completed.length;return n<6?"Recruit":n<18?"Private":n<36?"Corporal":n<54?"Sergeant":"Lieutenant"}
function score(){return Math.min(100,40+state.completed.length)}
function bodyMap(parts=[]){
  const active=p=>parts.includes(p)?"active":"";
  return `<div class="body-map-wrap"><div class="body-map-title">TARGET MUSCLES</div><div class="body-map"><svg viewBox="0 0 220 360">
  <g class="silhouette"><circle cx="110" cy="35" r="25"/><rect x="92" y="60" width="36" height="28" rx="14"/><path d="M75 84 Q110 68 145 84 L158 168 Q146 205 132 222 L130 322 L105 322 L101 220 L89 322 L64 322 L68 220 Q54 202 62 168 Z"/><rect x="38" y="92" width="28" height="142" rx="14" transform="rotate(7 52 163)"/><rect x="154" y="92" width="28" height="142" rx="14" transform="rotate(-7 168 163)"/></g>
  <g>
  <path class="muscle ${active("shoulders")}" d="M67 93 Q78 77 93 86 L90 112 Q74 112 67 93Z"/><path class="muscle ${active("shoulders")}" d="M127 86 Q143 77 153 94 Q146 112 130 112Z"/>
  <path class="muscle ${active("chest")}" d="M87 96 Q110 86 110 122 Q89 129 79 115Z"/><path class="muscle ${active("chest")}" d="M110 96 Q134 86 141 115 Q130 129 110 122Z"/>
  <path class="muscle ${active("core")}" d="M91 124 H129 L133 190 Q110 205 87 190Z"/>
  <path class="muscle ${active("biceps")}" d="M49 112 Q61 108 66 124 L64 169 Q51 175 45 159Z"/><path class="muscle ${active("biceps")}" d="M154 124 Q159 108 171 112 L175 159 Q169 175 156 169Z"/>
  <path class="muscle ${active("triceps")}" d="M43 165 Q56 158 65 171 L60 214 Q47 218 40 205Z"/><path class="muscle ${active("triceps")}" d="M155 171 Q164 158 177 165 L180 205 Q173 218 160 214Z"/>
  <path class="muscle ${active("forearms")}" d="M40 205 Q51 198 60 214 L56 244 Q44 250 37 235Z"/><path class="muscle ${active("forearms")}" d="M160 214 Q169 198 180 205 L183 235 Q176 250 164 244Z"/>
  <path class="muscle ${active("glutes")}" d="M76 188 Q95 180 108 198 L102 227 Q83 232 70 216Z"/><path class="muscle ${active("glutes")}" d="M112 198 Q125 180 144 188 L150 216 Q137 232 118 227Z"/>
  <path class="muscle ${active("quads")}" d="M69 215 Q91 207 102 229 L98 285 Q78 294 63 275Z"/><path class="muscle ${active("quads")}" d="M118 229 Q129 207 151 215 L157 275 Q142 294 122 285Z"/>
  <path class="muscle ${active("hamstrings")}" d="M67 235 Q84 225 98 245 L96 294 Q79 304 65 286Z"/><path class="muscle ${active("hamstrings")}" d="M122 245 Q136 225 153 235 L155 286 Q141 304 124 294Z"/>
  <path class="muscle ${active("calves")}" d="M66 286 Q80 276 94 291 L91 335 Q76 345 63 328Z"/><path class="muscle ${active("calves")}" d="M126 291 Q140 276 154 286 L157 328 Q144 345 129 335Z"/>
  <path class="muscle ${active("back")}" d="M82 102 Q110 88 138 102 L133 169 Q110 183 87 169Z"/></g></svg></div>
  <div class="body-map-legend">${parts.map(p=>`<span class="tag">${p[0].toUpperCase()+p.slice(1)}</span>`).join("")}</div></div>`;
}
function render(){
  const a=document.getElementById("app");
  a.innerHTML=`${state.splash?`<div class="splash"><img src="brand-logo.png" alt="Ronny's Military Workout logo"></div>`:""}<div class="app-shell"><div class="topbar"><div class="brand-mini"><img src="brand-logo.png" alt=""><span>RONNY'S MILITARY WORKOUT</span></div><div class="rank-pill">${rank()}</div></div><main>${state.player?playerView():tabView()}</main></div>${state.player?"":nav()}`;
  wire();
  if(state.splash)setTimeout(()=>{state.splash=false;render()},2800);
}
function nav(){return `<nav class="bottom-nav">${navBtn("today","⌂","Today")}${navBtn("program","▦","Program")}${navBtn("progress","◎","Progress")}${navBtn("settings","⚙","Settings")}</nav>`}
function navBtn(tab,icon,label){return `<button class="nav-btn ${state.tab===tab?"active":""}" data-tab="${tab}"><span>${icon}</span>${label}</button>`}
function tabView(){if(state.tab==="program")return programView();if(state.tab==="progress")return progressView();if(state.tab==="settings")return settingsView();return todayView()}
function todayView(){
 const w=currentWorkout();
 return `<section class="hero"><div class="hero-media"><img src="brand-logo.png" alt=""></div><div class="hero-content"><div class="eyebrow">Daily mission</div><h1>${w.title}</h1><p class="muted">${w.focus}</p><div class="stats"><div class="stat"><span class="muted small">Time</span><strong>10-12m</strong></div><div class="stat"><span class="muted small">Week</span><strong>${state.week}</strong></div><div class="stat"><span class="muted small">Day</span><strong>${state.day}</strong></div></div><button class="primary" id="start">BEGIN MISSION</button></div></section>
 <section class="section"><div class="row"><h2>Mission briefing</h2><span class="tag">Intermediate</span></div><div class="card"><p><strong>Objective:</strong> Build strength, conditioning, and consistency in under 15 minutes.</p><p class="muted small">Equipment: bodyweight and optional 10 lb dumbbells.</p></div><div class="week-grid">${[1,2,3,4,5,6,7].map(d=>`<div class="day-dot ${state.completed.includes(`${state.week}-${d}`)?"done":""} ${d===state.day?"today":""}">D${d}</div>`).join("")}</div></section>
 <section class="section"><h2>Target muscles</h2>${bodyMap(w.exercises.flatMap(e=>e.bodyParts).filter((v,i,a)=>a.indexOf(v)===i))}</section>
 <section class="section"><h2>Today's exercises</h2>${w.exercises.map((e,i)=>exerciseCard(e,i)).join("")}</section>`;
}
function exerciseCard(e,i){return `<div class="card"><div class="row"><div><strong>${i+1}. ${e.name}</strong><div class="muted small">${e.seconds} sec</div></div><span class="tag">${e.muscles}</span></div><p class="small" style="margin-top:10px">${e.form}</p>${bodyMap(e.bodyParts)}</div>`}
function programView(){return `<section class="hero"><div class="hero-content" style="margin-top:0"><div class="eyebrow">12 week campaign</div><h1>Program map</h1><p class="muted">Weeks 1 to 4 foundation, Weeks 5 to 8 strength and conditioning, Weeks 9 to 12 military performance.</p></div></section><section class="section">${Array.from({length:12},(_,i)=>i+1).map(w=>`<div class="card"><div class="row"><div><strong>Week ${w}</strong><div class="muted small">${w<=4?"Foundation":w<=8?"Strength and conditioning":"Military performance"}</div></div><button class="secondary" data-week="${w}" style="width:auto;padding:10px 14px">${w===state.week?"Active":"Select"}</button></div></div>`).join("")}</section>`}
function progressView(){const pct=Math.min(100,Math.round(state.completed.length/72*100));return `<section class="hero"><div class="hero-content" style="margin-top:0"><div class="eyebrow">Performance report</div><h1>${state.completed.length} missions complete</h1><p class="muted">Current rank: ${rank()}</p><div class="progressbar"><div style="width:${pct}%"></div></div><p class="small muted" style="margin-top:8px">${pct}% of the 12-week campaign</p></div></section><section class="section"><div class="stats"><div class="stat"><span class="muted small">Streak</span><strong>${state.completed.length}</strong></div><div class="stat"><span class="muted small">Weeks</span><strong>${Math.floor(state.completed.length/6)}</strong></div><div class="stat"><span class="muted small">Score</span><strong>${score()}</strong></div></div><div class="card"><label>Training notes</label><textarea id="notes" placeholder="Energy, soreness, results...">${state.notes}</textarea></div></section>`}
function settingsView(){return `<section class="hero"><div class="hero-content" style="margin-top:0"><div class="eyebrow">Preferences</div><h1>Settings</h1><p class="muted">Adjust how your missions run.</p></div></section><section class="section"><div class="card row"><div><strong>Sound coach</strong><div class="muted small">Countdown and transitions</div></div><input id="sound" type="checkbox" ${state.sound?"checked":""} style="width:auto"></div><div class="card row"><div><strong>Vibration</strong><div class="muted small">Exercise change alerts</div></div><input id="vibration" type="checkbox" ${state.vibration?"checked":""} style="width:auto"></div><div class="card notice"><strong>Safety notice:</strong> Stop if you feel sharp pain, dizziness, chest pain, or unusual shortness of breath. Exercise within your ability and speak with a qualified medical professional if you have health concerns.</div><button class="danger" id="reset">RESET PROGRESS</button></section>`}
function playerView(){
  const p=state.player,w=p.workout,e=w.exercises[p.index];
  const isRest=p.phase==="rest";
  const interval=isRest?(p.index>=w.exercises.length-1?30:p.restDuration):e.seconds;
  const nextName=p.index>=w.exercises.length-1?w.exercises[0].name:w.exercises[p.index+1].name;
  return `<section>
    <div class="row">
      <button class="secondary" id="exit" style="width:auto;padding:10px 14px">Stop Mission</button>
      <span class="tag">Round ${p.round}/${p.totalRounds}</span>
    </div>
    ${isRest?`
      <div class="rest-screen">
        <div class="eyebrow">Recovery interval</div>
        <h1>Rest</h1>
        <p class="muted">Next exercise: ${nextName}</p>
      </div>
    `:`
      ${exerciseVisual(e)}
      <div class="eyebrow">Exercise ${p.index+1} of ${w.exercises.length}</div>
      <h1>${e.name}</h1>
      <p class="muted">${e.form}</p>
    `}
    <div class="timer ${p.remaining<=3?"countdown-final":""}">${String(p.remaining).padStart(2,"0")}</div>
    <div class="progressbar"><div style="width:${100-(p.remaining/interval*100)}%"></div></div>
    <button class="pause-main ${p.paused?"paused":""}" id="pause">${p.paused?"RESUME EXERCISE":"PAUSE EXERCISE"}</button>
    <div class="controls" style="margin-top:10px">
      <button class="secondary" id="back">Back</button>
      <button class="secondary" id="skip">${isRest?"Skip Rest":"Skip Exercise"}</button>
      <button class="secondary" id="details">Instructions</button>
    </div>
    ${!isRest?`
      ${bodyMap(e.bodyParts)}
      <div class="card coaching-card" id="coaching">
        <h3>Why you are doing this</h3>
        <p>${e.coaching.purpose}</p>
        <h3>Starting position</h3>
        <p>${e.coaching.setup}</p>
        <h3>How to perform it</h3>
        <ol>${e.coaching.steps.map(step=>`<li>${step}</li>`).join("")}</ol>
        <h3>What you should feel</h3>
        <p>${e.coaching.feel}</p>
        <p class="small"><strong>Common mistake:</strong> ${e.mistake}</p>
        <p class="small"><strong>Easier version:</strong> ${e.easier}</p>
        <p class="small"><strong>Harder version:</strong> ${e.harder}</p>
      </div>
    `:""}
  </section>`;
}
function speak(text){if(!state.sound||!("speechSynthesis"in window))return;speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(text))}
function startPlayer(){
  const w=currentWorkout();
  state.player={workout:w,index:0,round:1,totalRounds:2,remaining:w.exercises[0].seconds,paused:false,timer:null,phase:"work",restDuration:15};
  speak(`Mission begins in 3, 2, 1. ${w.exercises[0].name}`);
  tickStart();
  render();
}
function tickStart(){
  clearInterval(state.player?.timer);
  state.player.timer=setInterval(()=>{
    if(!state.player||state.player.paused)return;
    state.player.remaining--;
    if(state.player.remaining===10&&state.player.phase==="work")speak("Ten seconds");
    if(state.player.remaining===3)speak("3");
    if(state.player.remaining===2)speak("2");
    if(state.player.remaining===1)speak("1");
    if(state.player.remaining<=0)advancePhase();
    else render();
  },1000);
}
function advancePhase(){
  const p=state.player;
  if(!p)return;
  if(p.phase==="work"){
    const lastExercise=p.index>=p.workout.exercises.length-1;
    const lastRound=p.round>=p.totalRounds;
    if(lastExercise&&lastRound){finishMission();return}
    p.phase="rest";
    p.remaining=lastExercise?30:p.restDuration;
    speak(lastExercise?`Round ${p.round} complete. Rest 30 seconds.`:"Rest");
    if(state.vibration&&navigator.vibrate)navigator.vibrate(120);
    render();
    return;
  }
  if(p.index>=p.workout.exercises.length-1){p.round++;p.index=0}else{p.index++}
  p.phase="work";
  p.remaining=p.workout.exercises[p.index].seconds;
  speak(`Round ${p.round}. ${p.workout.exercises[p.index].name}`);
  render();
}
function finishMission(){
  const p=state.player;
  clearInterval(p.timer);
  const key=`${state.week}-${state.day}`;
  if(!state.completed.includes(key))state.completed.push(key);
  save();
  speak("Mission complete");
  state.player=null;
  alert("MISSION COMPLETE");
  if(state.day<6)state.day++;else{state.day=1;state.week=Math.min(12,state.week+1)}
  save();
  render();
}
function skipCurrent(){advancePhase()}
function wire(){document.querySelectorAll("[data-tab]").forEach(b=>b.onclick=()=>{state.tab=b.dataset.tab;render()});document.querySelectorAll("[data-week]").forEach(b=>b.onclick=()=>{state.week=Number(b.dataset.week);save();render()});const start=document.getElementById("start");if(start)start.onclick=startPlayer;const pause=document.getElementById("pause");if(pause)pause.onclick=()=>{state.player.paused=!state.player.paused;speak(state.player.paused?"Exercise paused":"Exercise resumed");render()};const skip=document.getElementById("skip");if(skip)skip.onclick=skipCurrent;const back=document.getElementById("back");if(back)back.onclick=()=>{if(state.player.index>0){state.player.index--;state.player.remaining=state.player.workout.exercises[state.player.index].seconds;render()}};const details=document.getElementById("details");if(details)details.onclick=()=>document.getElementById("coaching")?.scrollIntoView({behavior:"smooth"});
const exit=document.getElementById("exit");if(exit)exit.onclick=()=>{if(confirm("Stop this mission? It will not be marked complete.")){clearInterval(state.player.timer);state.player=null;render()}};const notes=document.getElementById("notes");if(notes)notes.oninput=e=>{state.notes=e.target.value;save()};const sound=document.getElementById("sound");if(sound)sound.onchange=e=>{state.sound=e.target.checked;save()};const vibration=document.getElementById("vibration");if(vibration)vibration.onchange=e=>{state.vibration=e.target.checked;save()};const reset=document.getElementById("reset");if(reset)reset.onclick=()=>{if(confirm("Reset all progress?")){localStorage.clear();location.reload()}}}
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("service-worker.js"));
render();
