const ERC721 = artifacts.require("ERC721");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("ERC721", function (/* accounts */) {
  it("should assert true", async function () {
    await ERC721.deployed();
    return assert.isTrue(true);
  });
});
