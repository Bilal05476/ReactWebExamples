import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import "./css/DashContent.css";

export default function NavShow() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" className="navShowFont">
        App
      </Link>
      <Link color="inherit" href="/" className="navShowFont">
        Dashboard
      </Link>
      <Typography color="textPrimary" className="navShowFont">
        Crypto
      </Typography>
    </Breadcrumbs>
  );
}
