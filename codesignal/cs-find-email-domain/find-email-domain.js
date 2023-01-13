/* eslint-disable no-unused-vars */

function findEmailDomain(address) {
  return address.slice(
    address.lastIndexOf('@') + 1, address.length
  );
}
