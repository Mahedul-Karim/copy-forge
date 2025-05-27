import React from 'react'
import Swal from 'sweetalert2';

export const useToast = () => {
  const setAlert = (type, title) => {
    Swal.fire({
      title: title,
      icon: type,
      confirmButtonColor: "#ffd65a",
      customClass:{
        popup:'!bg-background dark:!bg-paper',
        title:'!text-text-primary'
      }
    });
  };

  const success = (title) => {
    setAlert("success", title);
  };

  const warning = (title) => {
    setAlert("warning", title);
  };
  const error = (title) => {
    setAlert("error", title);
  };

  return { success, warning, error };
}
