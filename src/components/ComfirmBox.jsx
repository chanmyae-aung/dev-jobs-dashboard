import React, { useEffect } from "react";
import Swal from "sweetalert2";

export default function ComfirmBox({ deleteCompany, setConfirm, deleteJob }) {
  Swal.fire({
    title: "Are you sure to delete?",
    text: "You won't be able to revert this!",
    // icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
     deleteCompany && deleteCompany();
     deleteJob && deleteJob();
      setConfirm(false);
    } else {
      setConfirm(false);
    }
  });
}
