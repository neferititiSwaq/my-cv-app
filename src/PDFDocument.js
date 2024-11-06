import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import '@fontsource/roboto'; // Import Roboto font

// Create styles
const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Roboto', // Use Roboto font
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold', // Optional: Make the heading bold
  },
  subheading: {
    fontSize: 18,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
  },
});

// Create Document Component
const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Personal Info Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>Maria Thembi Mathibela</Text>
        <Text style={styles.text}>Full Stack Web Development Student</Text>
        <Text style={styles.text}>Location: South Africa</Text>
        <Text style={styles.text}>Email: thembisilemathibela2010@gmail.com</Text>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.subheading}>Skills</Text>
        <Text style={styles.text}>JavaScript</Text>
        <Text style={styles.text}>React</Text>
        <Text style={styles.text}>Node.js</Text>
        <Text style={styles.text}>HTML</Text>
        <Text style={styles.text}>CSS</Text>
        <Text style={styles.text}>Tailwind CSS</Text>
        <Text style={styles.text}>Webpack</Text>
        <Text style={styles.text}>GitHub</Text>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <Text style={styles.subheading}>Experience</Text>
        <Text style={styles.text}>
          Farmer: Managed farm operations, planting, and harvesting crops, including breeding goats and building a vertical farm using technological skills for automation.
        </Text>
      </View>

      {/* Contact Section */}
      <View style={styles.section}>
        <Text style={styles.subheading}>Contact Information</Text>
        <Text style={styles.text}>Phone: (123) 456-7890</Text>
        <Text style={styles.text}>LinkedIn: https://www.linkedin.com/in/mathibela-thembisile-1b4276115/</Text>
        <Text style={styles.text}>GitHub: https://github.com/neferititiSwaq</Text>
      </View>
    </Page>
  </Document>
);

export default PDFDocument;
