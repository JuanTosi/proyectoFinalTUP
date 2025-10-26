import Swal from "sweetalert2";

export const swalCustom = Swal.mixin({
  background: "rgba(255, 240, 245, 0.95)", // fondo rosado muy suave
  color: "#2c2c2c",                         // texto oscuro
  confirmButtonColor: "#ca1c73",            // tu color principal
  cancelButtonColor: "#999",
  buttonsStyling: true,
  customClass: {
    popup: "rounded-4 shadow-lg border border-pink-200", // bordes redondeados
    confirmButton: "btn btn-pink text-white px-4 py-2",
    cancelButton: "btn btn-secondary px-4 py-2",
  },
});
