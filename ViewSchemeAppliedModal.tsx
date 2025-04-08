import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/react";
import SchemeApplicationDownloadPdf from "@components/SchemeApplicationPdfDownload.tsx";
import { pdf } from "@react-pdf/renderer";
import { encodeFilePath } from "@utils/string";
import React from "react";

const ViewSchemeAppliedModal = (viewSchemeApplied: any) => {
  const downloadPdf = async (data: any) => {
    // Ensure you pass a valid React component into pdf()
    const component = <SchemeApplicationDownloadPdf data={data} />;

    // Convert the React component to a PDF blob
    const blob = await pdf(component).toBlob();

    // Create a URL for the blob and trigger download
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    window.open(url, "_blank");
    link.download = "scheme_application.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const data = viewSchemeApplied?.viewSchemeApplied;
  return (
    <ModalContent>
      <ModalHeader
        className="text-capitalize"
        style={{ backgroundColor: "#107869", color: "white" }}>
        <div className="flex justify-between mr-7">
          <div>View Details</div>
          <div>
            <Button
              className="mr-8"
              colorScheme={"facebook"}
              onClick={() => downloadPdf(data)}>
              Download Profile
            </Button>
          </div>
        </div>
      </ModalHeader>
      <ModalCloseButton style={{ color: "white" }} />
      <ModalBody>
        <div className="row ">
          <div className="flex items-center justify-center mt-2 ">
            <h4 style={{ color: "#187869" }}>Basic Details</h4>
          </div>
          <div>
            <hr />
          </div>
          <div className="col-6 flex">
            <div className="col-8">Name of the proposed FPO :</div>
            <div className="col-4">{data?.name_of_proposed_fpo}</div>
          </div>

          <div className="col-6 flex">
            <div className="col-6">Address :</div>
            <div className="col-6">{data?.address}</div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-8">Mobile No. :</div>
            <div className="col-4">{data?.mobile}</div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-6">Email :</div>
            <div className="col-6">{data?.email}</div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-8">Registartion Number From ROC :</div>
            <div className="col-4">{data?.registraion_number_roc}</div>
          </div>

          <div className="flex items-center justify-center mt-4 ">
            <h4 style={{ color: "#187869" }}>Address Details</h4>
          </div>
          <div>
            <hr />
          </div>
          <div className="col-6 flex">
            <div className="col-8">Location Type :</div>
            <div className="col-4">{data?.location_type}</div>
          </div>

          <div className="col-6 flex">
            <div className="col-6">Division :</div>
            <div className="col-6">{data?.division}</div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-8">District :</div>
            <div className="col-4">{data?.lg_district_name}</div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-6">Block :</div>
            <div className="col-6">{data?.lg_block_name}</div>
          </div>

          <div className="flex items-center justify-center mt-4 ">
            <h4 style={{ color: "#187869" }}>Preferred Bank Details</h4>
          </div>
          <div>
            <hr />
          </div>
          <div className="col-6 flex">
            <div className="col-8">Bank :</div>
            <div className="col-4">{data?.bank_name}</div>
          </div>

          <div className="col-6 flex">
            <div className="col-6">Branch :</div>
            <div className="col-6">{data?.branch_name}</div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-8">Village :</div>
            <div className="col-4">{data?.lg_village_name}</div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-6">Category :</div>
            <div className="col-6">{data?.category}</div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-8">
              Location of FPO office of the <br /> FPO registered :
            </div>
            <div className="col-4">{data?.locationfpooffice_registered}</div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-6">
              Registartion Certification <br /> From ROC :
            </div>
            <div className="col-6">
              {data?.registraion_certification_roc}

              {/* <Button
            isDisabled={!data?.registraion_certification_roc}
            onClick={async () =>
              window.open(
                await encodeFilePath(data?.registraion_certification_roc),
                "_ blank"
              )
            }>
            View Document
          </Button> */}
            </div>
          </div>

          <div className="flex items-center justify-center mt-4 ">
            <h4 style={{ color: "#187869" }}>Bank Details</h4>
          </div>
          <div>
            <hr />
          </div>
          <div className="col-6 flex">
            <div className="col-8">Bank Name :</div>
            <div className="col-4">{data?.preferred_bank_name}</div>
          </div>

          <div className="col-6 flex">
            <div className="col-6">Branch Name :</div>
            <div className="col-6">{data?.preferred_branch_name}</div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-8">IFSC :</div>
            <div className="col-4">{data?.ifsc}</div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-6">Account No. :</div>
            <div className="col-6">{data?.account_no}</div>
          </div>

          <div className="flex items-center justify-center mt-4 ">
            <h4 style={{ color: "#187869" }}>Detail Project Report</h4>
          </div>
          <div>
            <hr />
          </div>
          <div className="col-6 flex">
            <div className="col-8">Bank Loan Required :</div>
            <div className="col-4">{data?.bank_loan_required}</div>
          </div>

          <div className="col-6 flex">
            <div className="col-6">DPR Upload :</div>
            <div className="col-6">
              {data?.dpr_upload}
              {/* <Button
            isDisabled={!data?.dpr_upload}
            onClick={async () =>
              window.open(await encodeFilePath(data?.dpr_upload), "_ blank")
            }>
            View Document
          </Button> */}
            </div>
          </div>

          <div>
            <hr />
          </div>
          <div className="col-6 flex mt-1">
            <div className="col-8">Name Of Director with Details :</div>
            <div className="col-4">{data?.name_of_director}</div>
          </div>

          <div className="col-6 flex mt-1">
            <div className="col-6">ID Proof :</div>
            <div className="col-6">
              {data?.director_id_proof}
              {/* <Button
            isDisabled={!data?.director_id_proof}
            onClick={async () =>
              window.open(await encodeFilePath(data?.director_id_proof), "_ blank")
            }>
            View Document
          </Button> */}
            </div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-8">Pan Id :</div>
            <div className="col-4">
              {data?.director_pan_id}
              {/* <Button
            isDisabled={!data?.director_pan_id}
            onClick={async () =>
              window.open(await encodeFilePath(data?.director_pan_id), "_ blank")
            }>
            View Document
          </Button> */}
            </div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-6">Aadhar No :</div>
            <div className="col-6">
              {data?.director_aadhar_no}{" "}
              {/* <Button
            isDisabled={!data?.director_aadhar_no}
            onClick={async () =>
              window.open(await encodeFilePath(data?.director_aadhar_no), "_ blank")
            }>
            View Document
          </Button> */}
            </div>
          </div>

          <div>
            <hr />
          </div>
          <div className="col-6 flex mt-1">
            <div className="col-8">Name Of CEO with Details :</div>
            <div className="col-4">{data?.name_of_ceo}</div>
          </div>

          <div className="col-6 flex mt-1">
            <div className="col-6">ID Proof :</div>
            <div className="col-6">
              {data?.ceo_id_proof}

              {/* <Button
            isDisabled={!data?.ceo_id_proof}
            onClick={async () =>
              window.open(await encodeFilePath(data?.ceo_id_proof), "_ blank")
            }>
            View Document
          </Button> */}
            </div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-8">Pan Id :</div>
            <div className="col-4">
              {data?.ceo_pan_id}
              {/* <Button
            isDisabled={!data?.ceo_pan_id}
            onClick={async () =>
              window.open(await encodeFilePath(data?.ceo_pan_id), "_ blank")
            }>
            View Document
          </Button> */}
            </div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-6">Aadhar No :</div>
            <div className="col-6">
              {data?.ceo_aadhar_no}
              {/* <Button
            isDisabled={!data?.ceo_aadhar_no}
            onClick={async () =>
              window.open(await encodeFilePath(data?.ceo_aadhar_no), "_ blank")
            }>
            View Document
          </Button> */}
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div className="col-6 flex mt-1">
            <div className="col-8">List of Membership of FPO :</div>
            <div className="col-4">
              {data?.membership_fpo}

              {/* <Button
            isDisabled={!data?.membership_fpo}
            onClick={async () =>
              window.open(await encodeFilePath(data?.membership_fpo), "_ blank")
            }>
            View Document
          </Button> */}
            </div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-6">
              Bank Statement of <br /> proposed FPO :
            </div>
            <div className="col-6">
              {data?.bank_statement_fpo}
              {/* <Button
            isDisabled={!data?.bank_statement_fpo}
            onClick={async () =>
              window.open(await encodeFilePath(data?.bank_statement_fpo), "_ blank")
            }>
            View Document
          </Button> */}
            </div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-8">List of Boards of Directors :</div>
            <div className="col-4">
              {data?.board_of_director}
              {/* <Button
            isDisabled={!data?.board_of_director}
            onClick={async () =>
              window.open(await encodeFilePath(data?.board_of_director), "_ blank")
            }>
            View Document
          </Button> */}
            </div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-6">List of FIG Created :</div>
            <div className="col-6">
              {data?.fig_created}
              {/* <Button
            isDisabled={!data?.fig_created}
            onClick={async () =>
              window.open(await encodeFilePath(data?.fig_created), "_ blank")
            }>
            View Document
          </Button> */}
            </div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-8">
              List Of proposed products <br /> under FPO :
            </div>
            <div className="col-4">
              {data?.products_under_fpo}
              {/* <Button
            isDisabled={!data?.products_under_fpo}
            onClick={async () =>
              window.open(await encodeFilePath(data?.products_under_fpo), "_ blank")
            }>
            View Document
          </Button> */}
            </div>
          </div>

          <div className="col-6 flex mt-3">
            <div className="col-6">
              Infrastructure/Building <br /> availabel for the <br /> Establishment of
              FPO :
            </div>
            <div className="col-6">{data?.infrastructure_established_fpo}</div>
          </div>

          <div className="col-6 flex mt-3 mb-4">
            <div className="col-8">Product Specialization(if Any) :</div>
            <div className="col-4">{data?.product_specialization}</div>
          </div>
        </div>
      </ModalBody>
    </ModalContent>
  );
};

export default ViewSchemeAppliedModal;
