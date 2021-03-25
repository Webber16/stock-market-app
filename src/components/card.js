import React, { useEffect, useState } from "react";
import "./card.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const urls = "https://kfinance.koding.ro/stock/";

export default function CardComponent(props) {
  const [value, setValue] = useState();
  const [price, setPrice] = useState();
  const [change, setChange] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.selectedStock.acronym) {
      setLoading(true);
      fetch(`${urls}${props.selectedStock.acronym}`).then((response) => {
        console.log(response);
        if (response.status === 200) {
          response.text().then((data) => {
            setValue(data);
            console.log(data);
            data = data.split(" ");
            setLoading(false);

            setPrice(data[0]);
            setChange(data[1]);
          });
        } else {
          setLoading(false);
          setValue("error");
        }
      });
    }
  }, [props.selectedStock]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          width: "450px",
        }}
      >
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Exo",
            fontSize: "23px",
          }}
        >
          {props.selectedStock.name}
        </p>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Exo",
            fontSize: "18px",
          }}
        >
          {props.selectedStock.acronym}
        </p>

        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignSelf: "center",
              marginTop: 50,
              marginBottom: 50,
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <Grid container spacing={3} style={{ marginTop: 10 }}>
            <Grid
              style={{
                paddingRight: "10px",
                paddingTop: "20px",
              }}
              item
              xs={6}
            >
              <Card style={{ marginLeft: "1rem", marginBottom: "1rem" }}>
                <CardContent
                  style={{
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Exo",
                      fontSize: "18px",
                    }}
                  >
                    Price
                  </Typography>
                </CardContent>
                <div
                  style={{
                    float: "right",
                    marginRight: 16,
                    fontFamily: "Exo",
                    fontSize: "18px",
                  }}
                >
                  <p>{price} $</p>
                </div>
              </Card>
            </Grid>

            <Grid
              style={{ paddingRight: "10px", paddingTop: "20px" }}
              item
              xs={6}
            >
              <Card style={{ marginRight: "1rem", marginBottom: "1rem" }}>
                <CardContent
                  style={{
                    backgroundColor: "black",
                    color: "white",
                  }}
                >
                  <Typography style={{ fontFamily: "Exo", fontSize: "18px" }}>
                    24h
                  </Typography>
                </CardContent>
                <div
                  style={{
                    float: "right",
                    marginRight: 16,
                    fontFamily: "Exo",
                    fontSize: "18px",
                  }}
                >
                  <p
                    style={{
                      color: Math.sign(change) < 0 ? "red" : "#32CD32",
                    }}
                  >
                    {change} %
                  </p>
                </div>
              </Card>
            </Grid>
          </Grid>
        )}
      </Card>
    </div>
  );
}
