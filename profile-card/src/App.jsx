import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <h1>Jhon Martin Abonalla</h1>
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img src="1L0A7494.jpeg" className="avatar" alt="" />
    </div>
  )
}

function Intro() {
  return (
    <div>
      Third-year Information Technology student at University of Santo Tomas. Besides coding, I also love editing videos, making itineraries, travelling to other places and countries, and watching series and movies. 
    </div>
  )
}

function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor: props.backgroundColor}}>
      <p>{props.name}</p>
    </div>
  )
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill 
        name = "React ⚛︎"
        backgroundColor = "#58c4dc"
      />
      <Skill 
        name = "HTML + CSS 👨🏻‍💻"
        backgroundColor = "#e5532d"
      />
      <Skill 
        name = "JavaScript 📜"
        backgroundColor = "#f7e025"
      />
      <Skill 
        name = "PHP"
        backgroundColor = "#556096"
      />
      <Skill 
        name = "ASP.net"
        backgroundColor = "#459bed"
      />
    </div>
  )
}
