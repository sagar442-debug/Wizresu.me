"use client";
import { Document, Page, Text, View, Font } from "@react-pdf/renderer";
import React from "react";
import { TbPointFilled } from "react-icons/tb";

// Font.register({
//   family: "RobotoText",
//   fonts: [
//     {
//       src: "http://fonts.gstatic.com/s/abeezee/v9/JYPhMn-3Xw-JGuyB-fEdNA.ttf", // Regular
//     },
//     {
//       src: "http://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.ttf", // Bold
//       fontFamily: "Times-Bold",fontWeight:"600",
//     },
//   ],
// });

const DefaultTemplate = () => {
  return (
    <Document style={{ maxWidth: 700 }}>
      <Page size={"A4"} style={{ padding: 10, fontFamily: "Times-Roman" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              fontSize: "16px",
              fontFamily: "Times-Bold",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            John Doe
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: 10,
              marginTop: 5,
              flexWrap: "wrap",
            }}
          >
            <Text
              style={{
                borderRightWidth: 1,
                borderColor: "#000",
                borderStyle: "solid",
                paddingRight: 5,
              }}
            >
              Email: sagarsapkotaisthegoat@example.com
            </Text>
            <Text
              style={{
                borderRightWidth: 1,
                borderColor: "#000",
                borderStyle: "solid",
                paddingRight: 5,
              }}
            >
              Phone: (123) 456-7890
            </Text>
            <Text
              style={{
                borderRightWidth: 1,
                borderColor: "#000",
                borderStyle: "solid",
                paddingRight: 5,
              }}
            >
              Website: https://websitelongasswebsite.com/
            </Text>
            <Text
              style={{
                borderRightWidth: 1,
                borderColor: "#000",
                borderStyle: "solid",
                paddingRight: 5,
              }}
            >
              LinkedIn: john-doe09
            </Text>
            <Text style={{}}>Github: john-doe09</Text>
          </View>
        </View>

        {/* Experience Section */}
        <View
          style={{ display: "flex", flexDirection: "column", fontSize: 10 }}
        >
          <Text
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              borderStyle: "solid",
              fontSize: 12,
              fontFamily: "Times-Bold",
              fontWeight: "600",
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            Experience
          </Text>
          <View style={{ display: "flex", flexDirection: "column" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 2,
              }}
            >
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ fontFamily: "Times-Bold", fontWeight: 600 }}>
                  Software Engineer
                </Text>
                <Text>Amazon</Text>
              </View>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text>California, USA</Text>
                <Text>2020 - Present</Text>
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TbPointFilled />
                <Text>
                  Led the development of web applications using React.js and
                  Node.js, improving codebase maintainability and application
                  performance.
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TbPointFilled />
                <Text>
                  Collaborated closely with the design team to implement UI/UX
                  best practices, ensuring responsive and user-friendly
                  interfaces.
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TbPointFilled />
                <Text>
                  Integrated third-party APIs and RESTful services to enhance
                  application functionality, boosting performance and usability.
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TbPointFilled />
                <Text>
                  Wrote unit tests and conducted code reviews, contributing to a
                  culture of high-quality, test-driven development.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 2,
              }}
            >
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ fontFamily: "Times-Bold", fontWeight: 600 }}>
                  Software Engineer
                </Text>
                <Text>Amazon</Text>
              </View>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text>California, USA</Text>
                <Text>2020 - Present</Text>
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TbPointFilled />
                <Text>
                  Led the development of web applications using React.js and
                  Node.js, improving codebase maintainability and application
                  performance.
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TbPointFilled />
                <Text>
                  Collaborated closely with the design team to implement UI/UX
                  best practices, ensuring responsive and user-friendly
                  interfaces.
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TbPointFilled />
                <Text>
                  Integrated third-party APIs and RESTful services to enhance
                  application functionality, boosting performance and usability.
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TbPointFilled />
                <Text>
                  Wrote unit tests and conducted code reviews, contributing to a
                  culture of high-quality, test-driven development.
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{ display: "flex", flexDirection: "column", marginTop: 10 }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 2,
              }}
            >
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ fontFamily: "Times-Bold", fontWeight: 600 }}>
                  Software Engineer
                </Text>
                <Text>Amazon</Text>
              </View>
              <View style={{ display: "flex", flexDirection: "column" }}>
                <Text>California, USA</Text>
                <Text>2020 - Present</Text>
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TbPointFilled />
                <Text>
                  Led the development of web applications using React.js and
                  Node.js, improving codebase maintainability and application
                  performance.
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TbPointFilled />
                <Text>
                  Collaborated closely with the design team to implement UI/UX
                  best practices, ensuring responsive and user-friendly
                  interfaces.
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TbPointFilled />
                <Text>
                  Integrated third-party APIs and RESTful services to enhance
                  application functionality, boosting performance and usability.
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TbPointFilled />
                <Text>
                  Wrote unit tests and conducted code reviews, contributing to a
                  culture of high-quality, test-driven development.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Education Section */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
            fontSize: 10,
          }}
        >
          <Text
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              borderStyle: "solid",
              fontSize: 12,
              fontFamily: "Times-Bold",
              fontWeight: "600",
              paddingTop: 5,
              marginBottom: 5,
            }}
          >
            Education
          </Text>
          <View style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
              <Text
                style={{
                  borderRightWidth: 1,
                  borderStyle: "solid",
                  borderColor: "black",
                  paddingRight: 5,
                  fontFamily: "Times-Bold",
                  fontWeight: "600",
                }}
              >
                University of Texas
              </Text>
              <Text
                style={{
                  borderRightWidth: 1,
                  borderStyle: "solid",
                  borderColor: "black",
                  paddingRight: 5,
                }}
              >
                Bachelor of Science in Computer Science
              </Text>
              <Text style={{}}>2016-2020</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text style={{ fontWeight: "600" }}>Summary</Text>
              <Text>
                Gained in-depth knowledge of algorithms, data structures, and
                software engineering principles. Completed hands-on projects
                involving web development, data analysis, and machine learning,
                using technologies such as React, Node.js, Python, and Java. Led
                collaborative coding projects that emphasized teamwork,
                debugging, and effective communication. Excelled in courses
                related to databases, cloud computing, and mobile development,
                developing a strong foundation for building scalable, secure,
                and efficient applications.
              </Text>
            </View>
          </View>
        </View>

        {/* Skills Section */}
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 10,
            fontSize: 10,
          }}
        >
          <Text
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "black",
              borderStyle: "solid",
              fontSize: 12,
              fontFamily: "Times-Bold",
              fontWeight: "600",
              paddingTop: 5,
              marginBottom: 5,
            }}
          >
            Skills
          </Text>
          <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Text style={{ fontFamily: "Times-Bold", fontWeight: 600 }}>
              Frameworks:
            </Text>
            <Text>
              React, Node.js,JavaScript, HTML, CSS, MongoDB, Git, Agile
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default DefaultTemplate;
