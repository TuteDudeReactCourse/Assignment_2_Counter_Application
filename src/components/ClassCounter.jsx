import React from "react";

class ClassCounter extends React.Component {
     constructor(props) {
        super(props);
        this.state = { count: 0 };
     }
     
     handleIncrement = () => {
        this.setState({count:this.state.count + 1})
     }

        handleDecrement = () => {
          this.setState({count: this.state.count > 0 ? this.state.count - 1 : 0})
     }

  render() {
    return (
      <>
        <div className="bg-white w-[350px] h-[300px] m-auto mt-10 p-5 flex flex-col gap-4  rounded-lg shadow-lg">
          <h1 className="font-bold text-2xl text-center">Class Counter</h1>
          <h1 className="text-8xl text-center">{this.state.count}</h1>

          <div className="flex gap-5">
            <button onClick={this.handleDecrement} className="w-1/2 bg-red-300 border border-red-900 cursor-pointer flex items-center justify-center text-5xl">
              -
            </button>
            <button onClick={this.handleIncrement} className="w-1/2 bg-green-300 border border-green-900 cursor-pointer flex items-center justify-center text-5xl">
              +
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ClassCounter;
