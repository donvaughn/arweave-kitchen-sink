// TODO 1b
export const buildQuery = ({ count = 100 } = {}) => {
  return `{
    transactions(
      first: ${count},
      tags: [
       {
         name: "App-Name",
         values: ["ArweaveDemoTS2022"]
       },
       {
         name: "Content-Type",
         values: ["text/plain"]
       }
      ]
    ) {
      edges {
        node {
          id
          owner {
            address
          }
          data {
            size
          }
          block {
            height
            timestamp
          }
          tags {
            name,
            value
          }
        }
      }
    }
  }`;
};
