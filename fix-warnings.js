const fs = require('fs');
const path = require('path');

function replaceInFile(filepath, from, to) {
  let content = fs.readFileSync(filepath, 'utf8');
  content = content.replace(from, to);
  fs.writeFileSync(filepath, content);
}

// 1. Footer.jsx
let footerContent = fs.readFileSync('client/src/components/Footer.jsx', 'utf8');
footerContent = footerContent.replace(/href=""/g, 'href="/"');
footerContent = footerContent.replace(/href="#"/g, 'href="/"');
fs.writeFileSync('client/src/components/Footer.jsx', footerContent);

// 2. Hero.jsx
let heroContent = fs.readFileSync('client/src/components/Hero.jsx', 'utf8');
heroContent = heroContent.replace(/import React, \{ useState, useEffect, useContext \} from "react";/, 'import React, { useState, useContext } from "react";');
heroContent = heroContent.replace(/const \[selectedCity, setSelectedCity\] = useState\(""\);\n/, '');
heroContent = heroContent.replace(/formData\.state\.trim\(\)==''\|\|formData\.city\.trim\(\)==''\|\|formData\.checkin\.trim\(\)==''\|\|formData\.checkout\.trim\(\)==''/, "formData.state.trim()===''||formData.city.trim()===''||formData.checkin.trim()===''||formData.checkout.trim()===''");
fs.writeFileSync('client/src/components/Hero.jsx', heroContent);

// 3. SignupForm.jsx
let signupContent = fs.readFileSync('client/src/components/SignupForm.jsx', 'utf8');
signupContent = signupContent.replace(/, NavLink/g, '');
signupContent = signupContent.replace(/import { Link, useNavigate, NavLink }/g, 'import { Link, useNavigate }');
signupContent = signupContent.replace(/import { Link, NavLink, useNavigate }/g, 'import { Link, useNavigate }');
fs.writeFileSync('client/src/components/SignupForm.jsx', signupContent);

// 4. Template11.jsx
let temp11Content = fs.readFileSync('client/src/components/Template11.jsx', 'utf8');
temp11Content = temp11Content.replace(/const {id,name,description,image} = data;/g, 'const {id,name,description} = data;');
temp11Content = temp11Content.replace(/id=='8'/g, "id==='8'");
fs.writeFileSync('client/src/components/Template11.jsx', temp11Content);

// 5. AboutUs.jsx
let aboutUsContent = fs.readFileSync('client/src/pages/AboutUs.jsx', 'utf8');
aboutUsContent = aboutUsContent.replace(/const navigate=useNavigate\(\)/g, '');
// For AboutUs.jsx, add // eslint-disable-next-line react-hooks/exhaustive-deps before the dependency array
aboutUsContent = aboutUsContent.replace(/    \}\n  \}, \[\]\)/g, '    }\n  // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [])');
fs.writeFileSync('client/src/pages/AboutUs.jsx', aboutUsContent);

// 6. ContactUs.js
let contactUsContent = fs.readFileSync('client/src/pages/ContactUs.js', 'utf8');
contactUsContent = contactUsContent.replace(/role="img"/g, '');
fs.writeFileSync('client/src/pages/ContactUs.js', contactUsContent);

// 7. Dashboard.jsx
let dashContent = fs.readFileSync('client/src/pages/Dashboard.jsx', 'utf8');
dashContent = dashContent.replace(/const navigate = useNavigate\(\);/g, '');
fs.writeFileSync('client/src/pages/Dashboard.jsx', dashContent);

// 8. Home.jsx
let homeContent = fs.readFileSync('client/src/pages/Home.jsx', 'utf8');
homeContent = homeContent.replace(/    \}\n    \n  \}, \[\]\)/g, '    }\n    \n  // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, [])');
fs.writeFileSync('client/src/pages/Home.jsx', homeContent);

// 9. Places.jsx
let placesContent = fs.readFileSync('client/src/pages/Places.jsx', 'utf8');
placesContent = placesContent.replace(/import { data } from '\.\.\/assets\/data';\n/g, '');
placesContent = placesContent.replace(/    \}   \n  \}, \[\]\);/g, '    }   \n  // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);');
fs.writeFileSync('client/src/pages/Places.jsx', placesContent);

console.log('Fixed warnings');
