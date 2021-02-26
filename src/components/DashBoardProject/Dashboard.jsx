import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "./css/dashpro.css";
import "./css/DashContent.css";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import Button from "@material-ui/core/Button";
import mobileApp from "../../img/mobile-app.png";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SearchIcon from "@material-ui/icons/Search";
import NavShow from "./NavShow";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Tabs from "@material-ui/core/Tabs";
import DataChart from "./DataChart";
import DataChart2 from "./DataChart2";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CoinData from "./CoinData";
import SendIcon from "@material-ui/icons/Send";

export default function Dashboard() {
  return (
    <>
      <div className="dashboard__content">
        <div className="row">
          <div className="col-md-12">
            <Paper className="heading mainHeader">
              <Typography className="typo" variant="h6">
                Crypto
              </Typography>
              <div className="navShow">
                <NavShow />
              </div>
            </Paper>
          </div>
        </div>

        <div className="row">
          {CoinData.map((item, ind) => (
            <div key={ind} className="col-lg-6 col-xl-3 column">
              <Paper
                className="heading balanceHistory px-0"
                style={{ paddingBottom: "0" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography className="typo coinPrice">
                    ${item.price}
                  </Typography>
                  <small className="text-success">{item.percentage}%</small>
                </div>

                <small className="px-4 text-muted">{item.coin}</small>
                <DataChart2 />
              </Paper>
            </div>
          ))}

          {/* <div className="col-lg-6 col-xl-3 column">
            <Paper className="heading">
              <Typography className="typo">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Typography>
            </Paper>
          </div>
          <div className="col-lg-6 col-xl-3 column">
            <Paper className="heading">
              <Typography className="typo">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Typography>
            </Paper>
          </div>
          <div className="col-lg-6 col-xl-3 column">
            <Paper className="heading">
              <Typography className="typo">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </Typography>
            </Paper>
          </div> */}
        </div>

        <div className="row">
          <div className="col-md-6 column">
            <Paper className="heading balancePortfolio">
              <div className="balanceLeft">
                <Typography className="balanceHeading">
                  Your Portfolio Balance
                </Typography>
                <h4 className="my-2 money">$179,626</h4>
                <small className="text-muted">overall balance</small>
                <br />
                <ButtonGroup>
                  <Button
                    className="my-2 mx-1 depoBtn"
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Deposit
                  </Button>
                  <Button
                    className="my-2 mx-1 withDrawBtn"
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Withdraw
                  </Button>
                </ButtonGroup>
                <br />

                <small className="wallet">
                  <AddCircleOutlineIcon /> &nbsp; Add New Wallet
                </small>
              </div>
              <div className="balanceRight">
                <small className="text-muted">
                  Portfolio Distribution <br />
                  BTC | 8.72
                  <br />
                  <div className="progress1 my-1"></div>78% <br />
                  RCL | 1.23 <br />
                  <div className="progress2 my-1"></div>18% <br />
                  LTE | 0.71 <br />
                  <div className="progress3 my-1"></div>4% <br />
                </small>
              </div>
            </Paper>
          </div>
          <div className="col-md-6 column">
            <Paper className="heading balanceHistory">
              <Typography className="">Balance History</Typography>
              <div className="my-2">
                <DataChart />
              </div>
            </Paper>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-lg-5 column">
            <Paper>
              <div className="sendMoneyHeader">
                <Typography className="">Send Money to</Typography>
                <small className="wallet wallet2">
                  <AddCircleOutlineIcon /> &nbsp; Add New Account
                </small>
              </div>
              <table className="table">
                <tr className="tableHeader">
                  <th>Acount Holder Name</th>
                  <th>Last Transfer</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>Bilal</td>
                  <td>17 days ago</td>
                  <td style={{ color: "rgb(4, 80, 221)" }}>
                    <SendIcon />
                    pay
                  </td>
                </tr>
                <tr>
                  <td>Ahmed</td>
                  <td>7 days ago</td>
                  <td style={{ color: "rgb(4, 80, 221)" }}>
                    <SendIcon />
                    pay
                  </td>
                </tr>
                <tr>
                  <td>Aamir</td>
                  <td>5 days ago</td>
                  <td style={{ color: "rgb(4, 80, 221)" }}>
                    <SendIcon />
                    pay
                  </td>
                </tr>
                <tr>
                  <td>Samad</td>
                  <td>10 days ago</td>
                  <td style={{ color: "rgb(4, 80, 221)" }}>
                    <SendIcon />
                    pay
                  </td>
                </tr>
                <tr>
                  <td>Saim</td>
                  <td>9 days ago</td>
                  <td style={{ color: "rgb(4, 80, 221)" }}>
                    <SendIcon />
                    pay
                  </td>
                </tr>
              </table>
            </Paper>
          </div>
          <div className="col-md-6 col-lg-3 column ">
            <Paper className="heading referFriends">
              <CardGiftcardIcon className="my-2" />
              <Typography className="typo my-2">Refer & Get Rewards</Typography>
              <small className="text-center my-2">
                Refer us your friends and earn exciting gifts when they join
              </small>
              <Button
                className="my-2 referBtn"
                variant="contained"
                color="primary"
              >
                Invite Friends
              </Button>
            </Paper>
          </div>
          <div className="col-md-6 col-lg-4 column">
            <Paper className="heading currencyCal">
              <Typography className="py-1">Currency Calculator</Typography>
              <small className="py-2">1 USD equals</small>
              <h4 className="money">159.65 PKR</h4>
              <small className="text-muted">@ 1 PKR = 159.65</small>
              <form>
                <FormControl className="formControl mx-2 my-1">
                  <InputLabel id="from">From</InputLabel>
                  <Select labelId="from" id="from">
                    <MenuItem>2000</MenuItem>
                    <MenuItem>2001</MenuItem>
                    <MenuItem>2002</MenuItem>
                  </Select>
                </FormControl>
                <FormControl className="formControl mx-2 my-1">
                  <InputLabel id="to">To</InputLabel>
                  <Select labelId="to" id="to">
                    <MenuItem>2020</MenuItem>
                    <MenuItem>2019</MenuItem>
                    <MenuItem>2018</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  className="mx-2 my-1 amount"
                  id="standard-basic"
                  label="Amount"
                />
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className="my-4 mx-2"
                  style={{ outline: "none" }}
                >
                  Calculate
                </Button>
              </form>
            </Paper>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 column">
            <Paper className="mainHeader">
              <div className="cryptoNews">
                <Typography>Crypto New</Typography>
                <Tabs
                  indicatorColor="primary"
                  textColor="primary"
                  aria-label=""
                  className="cryptoNewsBtn"
                >
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    className="sngleBtn"
                  >
                    All
                  </Button>
                  <Button className="sngleBtn">Bitcoin</Button>
                  <Button className="sngleBtn">Ripple</Button>
                  <Button className="sngleBtn">Lifecoin</Button>
                </Tabs>
                <SearchIcon className="cryptoSearchBtn d-none d-md-block" />
              </div>
              <Typography className="mx-3 py-4 text-left">
                Cryptocurrencies have been riding on some pretty rocky terrain
                lately and it remains to be seen what will happen should the
                first central bank-issued digital currency be launched. In fact,
                Sweden has voiced its desire to release a national digital
                currency in the next couple of years. Given the country’s
                gradual decline in cash usage, the Riksbank – Sweden’s central
                bank – is exploring this scenario. The e-krona, as they are
                expecting to call it, is being imagined as a tool that will play
                the same role as the tangible krona today: a currency that is
                independent of intermediaries, accessible to every citizen and
                usable for any type of payment regardless of its value.
              </Typography>
            </Paper>
          </div>
          <div className="col-md-4 column">
            <Paper className="heading mobileApp">
              <Typography className="">Download Mobile App</Typography>
              <img className="mobileAppImg" src={mobileApp} alt="mobile-app" />
            </Paper>
          </div>
        </div>
      </div>
    </>
  );
}
