import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Icon from "@material-ui/core/Icon";
import { list } from "./api-product.js";
import Products from "./Products";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    background: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    width: "100%",
    transform: "translateZ(0)",
  },
  tileTitle: {
    verticalAlign: "middle",
    lineHeight: 2.5,
    textAlign: "center",
    fontSize: "1.35em",
    margin: "5px 5px 5px 5px",
  },
  card: {
    margin: "auto",
    marginTop: 20,
  },
  title: {
    padding: `${theme.spacing(2)}px ${theme.spacing(2.5)}px ${theme.spacing(
      2
    )}px`,
    color: theme.palette.openTitle,
    backgroundColor: "#80808024",
    fontSize: "1.1em",
  },
  icon: {
    verticalAlign: "sub",
    color: "inherits",
    fontSize: "0.6em",
  },
  link: {
    color: "#f9f4f4",
    cursor: "pointer",
  },
}));

export default function Categories(props) {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState(props.categories[0]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list({
      category: props.categories[0],
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const listbyCategory = (category) => (event) => {
    setSelected(category);
    list({
      category: category,
    }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  return (
    <div>
      <Card className={classes.card}>
        <Typography type="title" className={classes.title}>
          Explore products by category
        </Typography>
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={8}>
            {props.categories.map((tile, i) => (
              <GridListTile
                key={i}
                className={classes.tileTitle}
                style={{
                  height: "64px",
                  borderRadius: 30,
                  backgroundColor: selected == tile ? "#817282" : "#a0738a",
                }}
              >
                <span className={classes.link} onClick={listbyCategory(tile)}>
                  {tile}{" "}
                  <Icon className={classes.icon}>
                    {selected == tile && "arrow_drop_down"}
                  </Icon>
                </span>
              </GridListTile>
            ))}
          </GridList>
        </div>
        <Divider />
        <Products products={products} searched={false} />
      </Card>
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};
