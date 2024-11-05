(function() {
    // Create an iframe element
    var iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.bottom = '20px';
    iframe.style.right = '20px';
    iframe.style.width = '300px';
    iframe.style.height = '150px';
    iframe.style.border = 'none';
    iframe.style.zIndex = '10000';
    iframe.src = 'https://nextjs-boilerplate-sigma-five-61.vercel.app/popup'; // URL of your popup route
  
    // Append the iframe to the body
    document.body.appendChild(iframe);
  })();
  