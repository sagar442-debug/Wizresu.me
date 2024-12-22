import { Document, Page, Text, View } from "@react-pdf/renderer";
import React from "react";

// Mimicking Tailwind CSS utility classes in react-pdf
const DefaultTemplate = () => {
  return (
    <Document style={{ backgroundColor: "#e0dddd", padding: 50 }}>
      <Page size={"A4"} style={{}}>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text>John Doe</Text>
          <Text>Web Developer</Text>
          <Text>Email: john.doe@example.com | Phone: (123) 456-7890</Text>
        </View>

        {/* Experience Section */}
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text>Experience</Text>
          <Text>
            <Text>Software Engineer</Text> at XYZ Company | 2021 - Present
          </Text>
          <Text>
            Developed modern web applications using React and Node.js, working
            closely with the design team to improve user experience.
          </Text>
          <Text>
            <Text>Junior Developer</Text> at ABC Corp | 2019 - 2021
          </Text>
          <Text>
            Built user interfaces and handled database integration, worked in an
            Agile team environment to deliver high-quality code.
          </Text>
        </View>

        {/* Education Section */}
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text>Education</Text>
          <Text>
            <Text>Bachelor of Science in Computer Science</Text> | XYZ
            University | 2015 - 2019
          </Text>
        </View>

        {/* Skills Section */}
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text>Skills</Text>
          <Text>
            React, Node.js, JavaScript, HTML, CSS, MongoDB, Git, Agile
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default DefaultTemplate;
