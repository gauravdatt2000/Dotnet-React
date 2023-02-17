
// Common Approach
var component1 = 
<div>
    <h1>Start React</h1>
    <p1>Fundamentals</p1>
</div>

ReactDOM.render(component1 , document.getElementById("root"))

//Best Approach
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(
    <div>
    <h1>Started learning react</h1>
    <p1>Learned fundamentals</p1>
</div>
)
