import React from "react";

const StatusArea = (props) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [status, setStatus] = React.useState(props.status);

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      {isEdit ? (
        <div>
          <input
            onChange={onStatusChange}
            onBlur={() => {
              setIsEdit(false);
              props.updateStatus(status);
            }}
            value={status}
            autoFocus={true}
          />
        </div>
      ) : (
        <div>
          <span
            onClick={() => {
              setIsEdit(true);
            }}
          >
            {props.status || "Input status"}
          </span>
        </div>
      )}
    </div>
  );
};

// class StatusArea extends React.Component {

//   state = {
//     isEdit: false,
//   };

//   activateEditing() {
//     this.setState({
//       isEdit: true,
//     });
//   }

//   deactivateEditing() {
//     this.setState({
//       isEdit: false,
//     });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.isEdit ? (
//           <div>
//             <input
//               autoFocus={true}
//               onBlur={this.deactivateEditing.bind(this)}
//               value={this.props.status}
//             />
//           </div>
//         ) : (
//           <div>
//             <span onClick={this.activateEditing.bind(this)}>
//               {this.props.status}
//             </span>
//           </div>
//         )}
//       </div>
//     );
//   }
// }

export default StatusArea;
