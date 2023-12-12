/* eslint-disable no-undef */
var ERC721 = artifacts.require("ERC721");

module.exports = function (deployer) {
  deployer.deploy(ERC721, "DoggoCoin", "D");
};
