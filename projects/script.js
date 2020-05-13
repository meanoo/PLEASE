const app = {
    initialize: function() {
      app.client = contentful.createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
        space: "ix4wnbg3o6cz",
        // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: "1xGpOQ6bGZ-zGhoX7uJkIurYBNUIVnuKxvNPIPcGcP0"
      });
    },
  
    getEntry: function(entry) {
      // fetch a particular project
      app.client.getEntry(entry).then(project => {
        const projectData = {
          title: project.fields.title,
          imageUrl: `http:${project.fields.starfield.fields.file.url}`,
          imageUrl2: `http:${project.fields.dysto.fields.file.url}`,
          // imageUrl3: `http:${project.fields.reel2020.fields.file.url}`,
          // imageTitle: project.fields.vid.fields.title,
          // description: documentToHtmlString(project.fields.description)
        };
        // load the template for this item from a local file
        fetch("../projects/projectPage.mustache")
          .then(response => response.text())
          .then(template => {
            // render the template with the data
            const rendered = Mustache.render(template, projectData);
            // add the element to the container
            $('.starfield').append(rendered);
          }
        );
      });
    },
  
  };