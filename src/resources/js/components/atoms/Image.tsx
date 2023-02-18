

type Props = {
    imageUrl: string;
  };

const Image = (props: Props) => {
    const url:string ="/images/"+props.imageUrl;
    return (
        <img src={url} />
    )
  };
  
  export default Image;