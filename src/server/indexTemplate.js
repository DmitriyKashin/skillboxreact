export const indexTemplate = (content) => 
`
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Reddit</title>
  <script src="static/client.js" type="application/javascript"></script>
</head>
<body>
  <div id="react_root">${content}</div>
</body>
</html>
`;