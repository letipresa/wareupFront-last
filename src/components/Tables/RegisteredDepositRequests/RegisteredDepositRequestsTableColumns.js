import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';import IconButton from "@mui/material/IconButton";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
export const columns = (handleAccept, handleReject) => [
  { id: "id", label: "ID", minWidth: 25 },
  { id: "title", label: "Título", minWidth: 100 },
  { id: "description", label: "Descripción", minWidth: 250 },
  {
    id: "email",
    label: "Email",
    minWidth: 75,
  },
  {
    id: "phone",
    label: "Teléfono",
    minWidth: 200,
  },
  {
    id: "businessName",
    label: "Empresa",
    minWidth: 200,
  },
  {
    id: "address",
    label: "Dirección",
    minWidth: 250,
  },
  {
    id: "cityId",
    label: "Barrio/Ciudad",
    minWidth: 150,
  },
  {
    id: "departmentName",
    label: "Departmento",
    minWidth: 150,
  },
  {
    id: "createdAt",
    label: "Fecha creación",
    minWidth: 150,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 50,
  },
  {
    id: "actions",
    label: "Acciones",
    minWidth: 150,
    align: "center",
    format: (value, row) => (
      <div>
        <IconButton onClick={() => handleAccept(row)}>
          <CheckCircleRoundedIcon />
        </IconButton>
        <IconButton onClick={() => handleReject(row)}>
          <CancelRoundedIcon />
        </IconButton>
      </div>
    ),
  },
];

//TODO: mover estos botones a otro componente asi le ponemos el Popover