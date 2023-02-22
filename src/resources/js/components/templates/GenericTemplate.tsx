import Header from "../organisms/Header"
import Footer from "../organisms/Footer"
type Props={
    pagename:string
};
const GenericTemplate = (props:Props) => {
    const temp:string=props.pagename+"test";
    return (
      <div>
        <Header imageUrl="icon(仮).svg"/>
        <h1>{temp}</h1>
        <Footer/>
      </div>
    )
  };
  
  export default GenericTemplate;