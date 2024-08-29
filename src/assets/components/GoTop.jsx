import ScrollToTop from "react-scroll-to-top";

function GoTop() {
  return (
    <div>
      <div style={{ marginTop: "10vh" }}>
        <ScrollToTop
          smooth
          width="40px"
          color="rgb(249, 168, 212)"
          className="hover:scale-110 duration-200"
        ></ScrollToTop>
      </div>
    </div>
  );
}

export default GoTop;
