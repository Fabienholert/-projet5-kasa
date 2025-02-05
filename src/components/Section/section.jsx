import './section.scss'
function Section(props) {
    return (
      <div className ='section' >
      <img src={props.imgSrc} alt={props.alt} className="section__image"/>
      </div>
    );
  }
  
  export default Section;
