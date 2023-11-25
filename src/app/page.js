export default function Home() {
    return (
        <>
            <div
                style={{
                    height: "100vh",
                    width: "100vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    fontSize: 32,
                    fontWeight: 600,
                }}
            >
                <svg
                    width="75"
                    viewBox="0 0 75 65"
                    fill="#000"
                    style={{ margin: "0 75px" }}
                >
                    <path d="M37.59.25l36.95 64H.64l36.95-64z"></path>
                </svg>
                <div style={{ marginTop: 40 }}>
                    Hello, World! EEB Birthday Card Generator.
                </div>
            </div>
        </>
    );
}
