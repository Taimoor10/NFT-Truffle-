// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./IERC165.sol";

interface IERC721 is IERC165 {

    event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);

    event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);

    event ApprovalforAll(address indexed _owner, address indexed _operator, bool approved);

    function balanceOf(address _owner) external view returns(uint256);
    
    function ownerOf(uint256 _tokenId) external view returns(address);

    function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes calldata data) external;

    function safeTransferFrom(address _from, address _to, uint256 _tokenId) external;

    function transferFrom(address _from, address _to, uint256 _tokenId) external;

    function approve(address _approved, uint256 _tokenId) external;

    function setApprovalForAll(address _operator, bool _approved) external;

    function getApproved(uint256 _tokenId) external view returns(address _operator);

    function isApprovedForAll(address _owner, address _operator) external view returns (bool);
}