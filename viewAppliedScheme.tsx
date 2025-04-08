import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  VStack,
  HStack,
  Divider,
  Grid,
  Button,
  Tooltip,
  IconButton,
} from "@chakra-ui/react";
import {
  viewActivityDetails,
  viewBankDetails,
  viewBasicDetails,
  viewPrefeeredBankDetails,
  viewUploads,
  viewCaseFPODetails,
  viewCBBODetails,
  viewCEODetails,
  viewOtherDetails,
  viewFishCatchmentDetails,
  viewFPODetails,
  viewFODetails,
  viewAgriCommonDetails,
  viewLandDetails,
  viewBusinessReadTime,
  viewIncubation,
  viewseeds,
  viewBusinessDescription,
  viewBusinessModelMarket,
} from "../../utils/viewSchemas";
import { pdf } from "@react-pdf/renderer";
import ViewDetails from "./View/ViewDetails";
import { fetcher } from "../../services/fetcher";
import { FaDownload } from "react-icons/fa";
import { BACKEND_API_URL } from "../../utils/constants";

const ViewAppliedScheme = ({ viewData }: any) => {
  // console.log("viewData", viewData);
  const [showComponent, setShowComponent] = useState<any[]>([]);
  const [villageMaster, setVillageMaster] = useState<{ [key: string]: any }>({});
  const [bankMaster, setBankMaster] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    let trimmedString = viewData[0]?.component_name.slice(2, -2);

    let propertiesArray = trimmedString?.split(",");
    setShowComponent(propertiesArray);
  }, [viewData]);

  useEffect(() => {
    const getVillageList = async () => {
      const villageMasterArray = await fetcher(
        { path: "/scheme/get-village" },
        { json: { id: "0" } }
      );

      // console.log("first", villageMasterArray)

      // Convert the array to an object
      const villageMasterObject = villageMasterArray?.reduce(
        (acc: any, village: any) => {
          acc[village.lg_village_id] = village;
          return acc;
        },
        {}
      );
      setVillageMaster(villageMasterObject);
    };

    getVillageList();
  }, []);

  useEffect(() => {
    const branchList = async () => {
      const bankMasterArray = await fetcher(
        { path: "/scheme/get-bank-and-branch" },
        { json: { id: "0" } }
      );

      // Convert the array to an object
      const bankMasterObject = bankMasterArray?.reduce((acc: any, bank: any) => {
        acc[bank.id] = bank;
        return acc;
      }, {});

      setBankMaster(bankMasterObject);
    };

    branchList();
  }, []);

  const basicDetails = viewBasicDetails(viewData, villageMaster)[0];
  const ActivityDetails = viewActivityDetails(viewData, villageMaster)[0];
  const BankDetails = viewBankDetails(viewData, bankMaster)[0];
  const prefeeredBankDetails = viewPrefeeredBankDetails(viewData, bankMaster)[0];
  const UploadedFiles = viewUploads(viewData)[0];
  const CaseFPODetails = viewCaseFPODetails(viewData)[0];
  const CBBODetails = viewCBBODetails(viewData)[0];
  const CEODetails = viewCEODetails(viewData)[0];
  const OtherDetails = viewOtherDetails(viewData)[0];
  const FishCatchmentDetails = viewFishCatchmentDetails(viewData)[0];
  const FPODetails = viewFPODetails(viewData, villageMaster)[0];
  const FODetails = viewFODetails(viewData)[0];
  const LandDetails = viewLandDetails(viewData)[0];
  const AgriCommonDetails = viewAgriCommonDetails(viewData)[0];
  const BusinessReadTime = viewBusinessReadTime(viewData)[0];
  const IncubationDetails = viewIncubation(viewData)[0];
  const SeedsDetails = viewseeds(viewData)[0];
  const BusinessDescription = viewBusinessDescription(viewData)[0];
  const BusainessModelMarket = viewBusinessModelMarket(viewData)[0];

  const downloadPdfDoc = async () => {
    const allDetails = [basicDetails, ActivityDetails, BankDetails];
    let component = (
      <ViewDetails
        data={viewData}
        showComponent={showComponent}
        villageMaster={villageMaster}
        bankMaster={villageMaster}
      />
    );

    const blob = await pdf(component).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `AppliedSchemeInformation.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Extract file name from path
  const extractFileName = (filePath: any) => {
    if (!filePath) {
      console.error("File path is undefined or null");
      return ""; // Return an empty string or handle the error as needed
    }
    const parts = filePath.split("/");
    const fileName = parts[parts.length - 1];
    return fileName;
  };

  // Download a single document based on the file path
  const downloadSingleDocument = (filePath: any) => {
    if (!filePath) return;

    const fileName = extractFileName(filePath);
    const encodedFileName = encodeURIComponent(fileName);
    window.open(`${BACKEND_API_URL}/files/pdfview/${fileName}`, "_blank");
  };

  // Map document types to their file paths in viewData
  const documentMapping = {
    "AADHAR CARD": viewData[0]?.aadhar_file,
    "ADDRESS PROOF": viewData[0]?.address_proof_file,
    "PASS BOOK": viewData[0]?.pass_book_file,
    COR: viewData[0]?.cor_file,
    "BUSINESS PLAN": viewData[0]?.business_plan_file,
    NOC: viewData[0]?.noc_file,
    DIC: viewData[0]?.dic_file,
    "ESTIMATED COST": viewData[0]?.estimated_cost_file,
  };

  return (
    <Box p={5}>
      {showComponent?.includes("viewBasicDetails") && (
        <VStack spacing={4} align="start">
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ width: "100%" }}>
            <Text fontSize="2xl" fontWeight="bold">
              Basic Details
            </Text>
            <Button
              colorScheme="teal"
              onClick={() => {
                downloadPdfDoc();
              }}>
              Download Profile
            </Button>
          </div>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(basicDetails).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewAgriCommonDetails") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            FO Details
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(AgriCommonDetails).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewLocationDetails") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            Activity Details
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(ActivityDetails).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewLandDetails") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            Land Details
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(LandDetails).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewBusinessDescription") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            Business Details
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(BusinessDescription).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewBusinessModelMarket") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            Business Model & Market
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(BusainessModelMarket).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewseeds") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            Seeds Details
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(SeedsDetails).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewIncubation") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            Incubation Details
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(IncubationDetails).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewBusinessReadTime") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            Business Readiness & Timeline
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(BusinessReadTime).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewBankDetails") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            BankDetails
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(BankDetails).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewPrefeeredBankDetails") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            PrefeeredBank Details
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(prefeeredBankDetails).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewUploads") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            Uploads
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.keys(documentMapping).map((docType: any) => {
              const filePath: any = documentMapping[docType];
              return (
                <HStack key={docType} justify="space-between" width="100%">
                  <Text fontWeight="bold">
                    {docType}:
                    {filePath ? (
                      <Tooltip hasArrow label={`Download ${docType}`}>
                        <IconButton
                          backgroundColor="#fff"
                          className="mx-2"
                          size="lg"
                          aria-label={`download ${docType}`}
                          icon={
                            <FaDownload
                              onClick={() => downloadSingleDocument(filePath)}
                              size={25}
                            />
                          }
                        />
                      </Tooltip>
                    ) : (
                      " N/A"
                    )}
                  </Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewCaseFPODetails") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            FPO Details
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(CaseFPODetails).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewCBBODetails") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            CBBO Details
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(CBBODetails).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewCEODetails") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            CEO Details
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(CEODetails).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewOtherDetails") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            Other Details
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(OtherDetails).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewFishCatchmentDetails") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            Fish Catchment Details
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(FishCatchmentDetails).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewFPODetails") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            FPO Details
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(FPODetails).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
      {showComponent?.includes("viewFODetails") && (
        <VStack spacing={4} align="start">
          <Text fontSize="2xl" fontWeight="bold">
            FO Details
          </Text>
          <Divider />
          <Grid templateColumns="repeat(2, 1fr)" gap={4} width="100%" marginBottom={10}>
            {Object.entries(FODetails).map(([key, value]) => {
              // Convert the key to a more readable format
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .trim()
                .split(" ")
                .map(
                  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                )
                .join(" ");

              return (
                <HStack key={key} justify="space-start" width="100%">
                  <Text fontWeight="bold">{formattedKey}:</Text>
                  <Text>{value || "N/A"}</Text>
                </HStack>
              );
            })}
          </Grid>
        </VStack>
      )}
    </Box>
  );
};

export default ViewAppliedScheme;
