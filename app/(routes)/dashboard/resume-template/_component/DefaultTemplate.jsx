"use client";
import {
  Document,
  Page,
  Text,
  View,
  Font,
  Link,
  PDFViewer,
} from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";

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

const DefaultTemplate = ({ data }) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Document
      style={{
        maxWidth: 700,
        borderRadius: 10,
        padding: 10,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
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
            {data?.firstName ? data.firstName : "John Doe"}
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
              Email: {""}
              {data?.emailAddress ? data.emailAddress : "johdoe@example.com"}
            </Text>
            <Text
              style={{
                borderRightWidth: 1,
                borderColor: "#000",
                borderStyle: "solid",
                paddingRight: 5,
              }}
            >
              Phone: {""}
              {data?.phoneNumber ? data.phoneNumber : "(123)-666-3922"}
            </Text>
            <Text
              style={{
                borderRightWidth: 1,
                borderColor: "#000",
                borderStyle: "solid",
                paddingRight: 5,
              }}
            >
              Website: {""}
              {data?.portfolioWebsite
                ? data.portfolioWebsite
                : "https://longwebsite.com/"}
            </Text>
            <Text
              style={{
                borderRightWidth: 1,
                borderColor: "#000",
                borderStyle: "solid",
                paddingRight: 5,
              }}
            >
              LinkedIn: {""}
              {data?.linkedInProfile ? data.linkedInProfile : "john-doe09"}
            </Text>
            <Text style={{}}>
              Github: {data?.githubProfile ? data.githubProfile : "john-doe0"}
            </Text>
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
          {data?.experience?.length > 0 ? (
            data?.experience?.map((item, index) => (
              <View
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 5,
                }}
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
                      {item?.position}
                    </Text>
                    <Text>{item?.companyName}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "column" }}>
                    <Text>{item?.companyLocation}</Text>
                    <Text>
                      {item?.startDate} - {item?.endDate}
                    </Text>
                  </View>
                </View>
                {item?.bulletPoint?.map((point, pointIndex) => (
                  <View
                    key={pointIndex}
                    style={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
                      <Text>{point}</Text>
                    </View>
                  </View>
                ))}
              </View>
            ))
          ) : (
            <>
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
                <View
                  style={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
                    <Text>
                      Led the development of web applications using React.js and
                      Node.js, improving codebase maintainability and
                      application performance.
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
                    <Text>
                      Collaborated closely with the design team to implement
                      UI/UX best practices, ensuring responsive and
                      user-friendly interfaces.
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
                    <Text>
                      Integrated third-party APIs and RESTful services to
                      enhance application functionality, boosting performance
                      and usability.
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      textDecorationStyle: "",
                    }}
                  >
                    <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
                    <Text>
                      Wrote unit tests and conducted code reviews, contributing
                      to a culture of high-quality, test-driven development.
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 10,
                }}
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
                <View
                  style={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
                    <Text>
                      Led the development of web applications using React.js and
                      Node.js, improving codebase maintainability and
                      application performance.
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
                    <Text>
                      Collaborated closely with the design team to implement
                      UI/UX best practices, ensuring responsive and
                      user-friendly interfaces.
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
                    <Text>
                      Integrated third-party APIs and RESTful services to
                      enhance application functionality, boosting performance
                      and usability.
                    </Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
                    <Text>
                      Wrote unit tests and conducted code reviews, contributing
                      to a culture of high-quality, test-driven development.
                    </Text>
                  </View>
                </View>
              </View>
            </>
          )}
        </View>

        {/* Projects */}

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 10.5,
            fontSize: 10.5,
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
            Projects
          </Text>
          {data?.projects?.length > 0 ? (
            data?.projects?.map((project) => (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: 5,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "",
                    }}
                  >
                    <Text>
                      <Link
                        src={project?.projectUrl}
                        style={{ fontFamily: "Times-Bold", fontWeight: 600 }}
                      >
                        {project?.projectName}
                      </Link>
                    </Text>

                    <Text>{project?.projectRole}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Text>
                      {project?.startDate} - {project?.endDate}
                    </Text>
                  </View>
                </View>

                <View
                  style={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  {project?.bulletPoints?.map((bulletPoint) => (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
                      <Text>{bulletPoint}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))
          ) : (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 2,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "",
                  }}
                >
                  <Text>
                    <Link
                      src={"https://wizresu.me"}
                      style={{ fontFamily: "Times-Bold", fontWeight: 600 }}
                    >
                      Eccomerce Website
                    </Link>
                  </Text>

                  <Text>Amazon</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Text>California, USA</Text>
                  <Text>2020 - Present</Text>
                </View>
              </View>

              <View
                style={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
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
                  <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
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
                  <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
                  <Text>
                    Integrated third-party APIs and RESTful services to enhance
                    application functionality, boosting performance and
                    usability.
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 10, marginRight: 5 }}>•</Text>
                  <Text>
                    Wrote unit tests and conducted code reviews, contributing to
                    a culture of high-quality, test-driven development.
                  </Text>
                </View>
              </View>
            </View>
          )}
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
