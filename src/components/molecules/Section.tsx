import "./Section.css"

interface SectionProps{
  children?: React.ReactNode;
  id: string;
}

const Section = (props: SectionProps) => {
  return (
    <div className="section" id={props.id}>
    <div className="section-content">
      {props.children}
    </div>
    </div>
  )
}

export default Section
