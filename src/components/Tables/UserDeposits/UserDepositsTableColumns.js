import { DepositActionsMenu } from "../../Menus";

export const columns = (
  handleEditBasicData,
  handleEditServices,
  handleEditAvailability,
  handleViewAvailability,
  handleValidateAvailability,
  handleDelete,
  handleImage,
  handlePreview
) => [
  { id: "id", label: "ID", minWidth: 25 },
  { id: "title", label: "Título", minWidth: 100 },
  {
    id: "totalM3",
    label: "Total m3",
    minWidth: 75,
  },
  {
    id: "currency",
    label: "Moneda",
    minWidth: 40,
  },
  {
    id: "expectedPrice",
    label: "Precio",
    minWidth: 50,
  },
  {
    id: "street",
    label: "Dirección",
    minWidth: 100,
  },
  {
    id: "postalCode",
    label: "Código postal",
    minWidth: 50,
  },
  {
    id: "businessName",
    label: "Empresa",
    minWidth: 50,
  },
  {
    id: "cityName",
    label: "Barrio/Ciudad",
    minWidth: 50,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 50,
  },
  {
    id: "actions",
    label: "Acciones",
    align: "center",
    format: (value, row) => (
      <DepositActionsMenu
        row={row}
        handleEditBasicData={handleEditBasicData}
        handleEditServices={handleEditServices}
        handleEditAvailability={handleEditAvailability}
        handleViewAvailability={handleViewAvailability}
        handleValidateAvailability={handleValidateAvailability}
        handleDelete={handleDelete}
        handleImage={handleImage}
        handlePreview={handlePreview}
      />
    ),
  },
];
