import Typography from "@material-ui/core/Typography";

const Copyright = () => {
    return (
      <Typography variant="body2" align="right">
        {"Copyright © "}
          積みゲー管理
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  };

  export default Copyright;