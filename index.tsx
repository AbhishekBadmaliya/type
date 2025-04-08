import React from "react";
import { Document, Page, View, StyleSheet, Text, Image } from "@react-pdf/renderer";

const SchemeApplicationDownloadPdf = ({ data }: any) => {
  const styles = StyleSheet.create({
    page: {
      padding: 20,
    },
    header: {
      textAlign: "center",
      fontWeight: "normal",
      marginBottom: 20,
      backgroundColor: "#005cab",
      width: "100%",
      padding: 5,
      color: "white",
      borderRadius: 5,
    },
    viewbody: {
      display: "flex",
      flexDirection: "row",
    },
    paragraph: {
      display: "flex",
      color: "black",
      marginBottom: 20,
      fontSize: 14,
      fontWeight: 400,
    },
    listContainer: {
      marginBottom: 20,
      paddingLeft: 20,
    },
    listItem: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 12,
    },
    bulletPoint: {
      width: 10,
      fontSize: 14,
    },
    listItemContent: {
      fontSize: 14,
    },
    numberedItem: {
      flexDirection: "row",
      marginBottom: 12,
      fontSize: 14,
    },
    numberedIndex: {
      width: 20,
    },
    d_flex: {
      display: "flex",
      flexDirection: "row",
      gap: "16px",
      alignItems: "center",
    },
    justify_between: {
      justifyContent: "space-between",
    },
    justify_center: {
      justifyContent: "center",
    },
    d_flex_column: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
    m_xy: {
      margin: "8px",
    },
    m_x: {
      marginLeft: "8px",
      marginRight: "8px",
    },
    m_y: {
      marginTop: "8px",
      marginBottom: "8px",
    },
    m_y1: {
      marginTop: "20px",
      marginBottom: "12px",
    },
    m_s: {
      marginLeft: "50px",
    },
    fs_121: {
      fontSize: "12px",
    },
    fs_12: {
      fontSize: "12px",
      marginLeft: "15px",
    },
    fs_14: {
      fontSize: "14px",
      marginLeft: "5px",
    },
    ml_0: {
      marginLeft: 0,
    },
    m_t: {
      marginTop: "8px",
    },
    separator: {
      border: "1px soid #3182ce",
      marginTop: "4px",
      marginBottom: "4px",
      backgroundColor: "#3182ce",
    },
    separator1: {
      border: "1px soid rgb(54, 54, 54)",
      marginTop: "2px",
      marginBottom: "2px",
      backgroundColor: "#3182ce",
      width: "530px",
    },
    col_4: {
      width: "33%",
    },
    align_start: {
      alignItems: "flex-start",
    },
    color_blue: {
      color: "#005cab",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.m_y}>
          <Text style={[styles.color_blue, styles.justify_center]}>BASIC DETAILS</Text>
          <View style={styles.separator}></View>
        </View>
        <View style={styles.d_flex}>
          <View style={[styles.d_flex, styles.d_flex_column]}>
            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Name Of Proposed FPO :</Text>
                <Text style={styles.fs_12}>{data?.name_of_proposed_fpo}</Text>
              </View>
            </View>
            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Address :</Text>
                <Text style={styles.fs_12}>{data?.address}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Mobile No. :</Text>
                <Text style={styles.fs_12}>{data?.mobile}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Email :</Text>
                <Text style={styles.fs_12}>{data?.email}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Registartion Number From ROC :</Text>
                <Text style={styles.fs_12}>{data?.registraion_number_roc}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.m_y1}>
          <Text style={[styles.color_blue, styles.justify_center]}>
            ADDRESS DETAILS
          </Text>
          <View style={styles.separator}></View>
        </View>
        <View style={styles.d_flex}>
          <View style={[styles.d_flex, styles.d_flex_column]}>
            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Location Type :</Text>
                <Text style={styles.fs_12}>{data?.location_type}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Division :</Text>
                <Text style={styles.fs_12}>{data?.division}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>District :</Text>
                <Text style={styles.fs_12}>{data?.lg_district_name}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Block :</Text>
                <Text style={styles.fs_12}>{data?.lg_block_name}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.m_y1}>
          <Text style={[styles.color_blue, styles.justify_center]}>
            PREFERRED BANK DETAILS
          </Text>
          <View style={styles.separator}></View>
        </View>
        <View style={styles.d_flex}>
          <View style={[styles.d_flex, styles.d_flex_column]}>
            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Bank :</Text>
                <Text style={styles.fs_12}>{data?.preferred_bank_name}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Branch :</Text>
                <Text style={styles.fs_12}>{data?.preferred_branch_name}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Village :</Text>
                <Text style={styles.fs_12}>{data?.lg_village_name}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Category :</Text>
                <Text style={styles.fs_12}>{data?.category}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>
                  Location of FPO office of the FPO registered :
                </Text>
                <Text style={styles.fs_12}>{data?.locationfpooffice_registered}</Text>
              </View>
            </View>
            {/* <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex, styles.m_s]}>
                <Text style={styles.fs_121}>Registartion Certification From ROC :</Text>
                <Text style={styles.fs_12}>
                  {data?.registraion_certification_roc}
                </Text>
              </View>
            </View> */}
          </View>
        </View>

        <View style={styles.m_y1}>
          <Text style={[styles.color_blue, styles.justify_center]}>BANK DETAILS</Text>
          <View style={styles.separator}></View>
        </View>
        <View style={styles.d_flex}>
          <View style={[styles.d_flex, styles.d_flex_column]}>
            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Bank Name :</Text>
                <Text style={styles.fs_12}>{data?.bank_name}</Text>
              </View>
            </View>
            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Bank Branch :</Text>
                <Text style={styles.fs_12}>{data?.branch_name}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>IFSC :</Text>
                <Text style={styles.fs_12}>{data?.ifsc}</Text>
              </View>
            </View>
            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Account No. :</Text>
                <Text style={styles.fs_12}>{data?.account_no}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.m_y1}>
          <Text style={[styles.color_blue, styles.justify_center]}>
            DETAIL PROJECT REPORT
          </Text>
          <View style={styles.separator}></View>
        </View>
        <View style={styles.d_flex}>
          <View style={[styles.d_flex, styles.d_flex_column]}>
            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Bank Loan Required :</Text>
                <Text style={styles.fs_12}>{data?.bank_name}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Name Of Director with Details :</Text>
                <Text style={styles.fs_12}>{data?.name_of_director}</Text>
              </View>
            </View>
            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Name Of CEO with Details :</Text>
                <Text style={styles.fs_12}>{data?.name_of_ceo}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>
                  Infrastructure/Building availabel for the Establishment of FPO :
                </Text>
                <Text style={styles.fs_12}>{data?.infrastructure_established_fpo}</Text>
              </View>
            </View>
            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Product Specialization(if Any) :</Text>
                <Text style={styles.fs_12}>{data?.product_specialization}</Text>
              </View>
            </View>

            {/* <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex, styles.m_s]}>
                <Text style={styles.fs_121}>DPR Upload :</Text>
                <Text style={styles.fs_12}>{data?.bank_branch}</Text>
              </View>
            </View> */}
            {/* 
            <View style={styles.separator1}></View> */}

            {/* <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex, styles.m_s]}>
                <Text style={styles.fs_121}>ID Proof :</Text>
                <Text style={styles.fs_12}>{data?.director_id_proof}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>Pan Id :</Text>
                <Text style={styles.fs_12}>{data?.director_pan_id}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex, styles.m_s]}>
                <Text style={styles.fs_121}>Aadhar No :</Text>
                <Text style={styles.fs_12}>{data?.director_aadhar_no}</Text>
              </View>
            </View> */}

            {/* <View style={styles.separator1}></View> */}

            {/* <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex, styles.m_s]}>
                <Text style={styles.fs_121}>ID Proof :</Text>
                <Text style={styles.fs_12}>{data?.ceo_id_proof}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex, styles.m_s]}>
                <Text style={styles.fs_121}>Aadhar No :</Text>
                <Text style={styles.fs_12}>{data?.ceo_aadhar_no}</Text>
              </View>
            </View> */}
          </View>
        </View>
        {/* <View style={styles.separator1}></View> */}

        {/* <View style={styles.d_flex}>
          <View style={[styles.d_flex, styles.d_flex_column]}>
            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>List of Membership of FPO :</Text>
                <Text style={styles.fs_12}>{data?.membership_fpo}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex, styles.m_s]}>
                <Text style={styles.fs_121}>Bank Statement of proposed FPO :</Text>
                <Text style={styles.fs_12}>{data?.bank_statement_fpo}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>List of Boards of Directors :</Text>
                <Text style={styles.fs_12}>{data?.board_of_director}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex, styles.m_s]}>
                <Text style={styles.fs_121}>List of FIG Created :</Text>
                <Text style={styles.fs_12}>{data?.fig_created}</Text>
              </View>
            </View>

            <View style={[styles.d_flex, styles.justify_between]}>
              <View style={[styles.d_flex]}>
                <Text style={styles.fs_121}>List Of proposed products under FPO :</Text>
                <Text style={styles.fs_12}>{data?.products_under_fpo}</Text>
              </View>
            </View>
            <View style={[styles.d_flex, styles.justify_between]}>

            </View>
          </View>
        </View> */}
      </Page>
    </Document>

    // For Image

    // <View style={[styles.d_flex, styles.justify_between]}>
    //       <View style={[styles.d_flex]}>
    //         <Text style={styles.fs_121}>Pan Id :</Text>
    //         <Image
    //           src={data?.ceo_pan_id}
    //           style={{
    //             width: "300px",
    //             height: "150px",
    //             border: "1px solid black",

    //             objectFit: "contain",
    //             objectPosition: "center",
    //           }}
    //         />
    //       </View>
    //     </View>
  );
};

export default SchemeApplicationDownloadPdf;
