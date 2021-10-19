import React, { useRef } from "react";
import SmartTable from "../../../ui/smart-table";

const Doctors = () => {
  const recordPerPage = 15;
  const defaultParam = {
    status: 1,
  };

  const actionHandler = (param) => {
    if (param.label === "View") {
      this.props.history.push(
        `/app/send-prescription-updated/${param.rowData.id}`
      );
    } else if (param.label === "Delete") {
      this.setState((state) => ({
        isDeleteModalOpen: !state.isDeleteModalOpen,
        formValues: param.rowData,
      }));
    } else {
      this.setState((state) => ({
        isModalOpen: !state.isModalOpen,
        formValues: param.rowData,
      }));
    }
  };
  const columns = [
    {
      dataField: "customer_name",
      label: "Doctor Name",
      type: "text",
      styles: {
        width: "20%",
      },
    },
    {
      dataField: "email",
      label: "Clinic Name",
      type: "text",
      styles: {
        width: "20%",
      },
    },
    {
      dataField: "mobile",
      label: "Email",
      type: "text",
      styles: {
        width: "10%",
      },
    },

    {
      dataField: "subCategory",
      styles: {
        width: "9%",
      },
      label: "Actions",
      actions: [
        {
          label: "View",
          className: "btn btn-success btn-sm me-2",
          icon: true,
          iconClass: "fa fa-eye",
        },
      ],
      type: "action",
    },
  ];

  const smartTable = useRef(null);

  return (
    <div>
      {" "}
      <SmartTable
        ref={smartTable}
        fetchUrl="api/queue/"
        defaultParam={defaultParam}
        actionHandler={actionHandler}
        recordPerPage={recordPerPage}
        cols={columns}
        // By -ANurag
        rowPreCls="queue"
      />
    </div>
  );
};

export default Doctors;
