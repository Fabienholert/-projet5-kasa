import './section.scss'
function Section(props) {
    return (
      <img src={props.imgSrc} alt={props.alt} className="sectionimage"/>
    );
  }
  
  export default Section;
