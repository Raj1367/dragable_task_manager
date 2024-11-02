export const HOCRed = (props) => (
    <div style={{ backgroundColor: "red" }}>
        <h3>Red</h3>
        <props.component />
    </div>
)

export const HOCGreen = (props) => (
    <div>
        <div style={{ backgroundColor: "green" }}>
            <h3>Green</h3>
            <props.component />
        </div>
    </div>
)
