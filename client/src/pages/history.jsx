import CardComponent from "@/components/CardComponent";

export default function history() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Previous Games</h2>

      {/* Container for Top Three Games */}
      <div>
        <h4>Top Three Games</h4>
        <div style={{display: "flex", flexWrap: "wrap"  }}>
          <CardComponent style={{ margin: "5px" }}/>
          <CardComponent style={{ margin: "5px" }}/>
          <CardComponent style={{ margin: "5px" }} />
        </div>
      </div>

      {/* Container for Other Games */}
      <div>
        <h4>Other Games</h4>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <CardComponent style={{ margin: "10px" }} />
          <CardComponent style={{ margin: "10px" }} />
          <CardComponent style={{ margin: "10px" }} />
          <CardComponent style={{ margin: "10px" }} />
        </div>
      </div>
    </div>
  );
}
