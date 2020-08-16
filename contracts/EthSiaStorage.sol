pragma solidity ^0.6.0;

import "./Ownable.sol";

contract EthSiaStorage is Ownable {
    
    struct profile {
        string[] siaHashOfMedia;
        bool isRegister;
        mapping(string => string) fileName;
    }
    
    mapping(address => profile) public profileMapping;
    
    modifier isRegister(address _addr) {
        require(profileMapping[_addr].isRegister, "Not registered.");
        _;
    }
    
    modifier isNotRegister(address _addr) {
        require(!profileMapping[_addr].isRegister, "Already registered.");
        _;
    }
    
    event registerUserevent(address owner);
    event uploadHash(address owner, string siaHash);
    
    function registerUser() public isNotRegister(msg.sender) {
        require(!profileMapping[msg.sender].isRegister, "Already registered.");
        profileMapping[msg.sender].isRegister = true;
        emit registerUserevent(msg.sender);
    }
    
    function UploadNewSiaHash(string memory siaHash, string memory fileName) public isRegister(msg.sender) {
        profileMapping[msg.sender].siaHashOfMedia.push(siaHash);
        profileMapping[msg.sender].fileName[siaHash] = fileName;
        emit uploadHash(msg.sender, siaHash);
        
    }
    
    function getSiaHashByIndex(uint256 index, address _addr) isRegister(_addr) public view returns(string memory) {
        return profileMapping[_addr].siaHashOfMedia[index];
    }
    
    function getSiaHashLength(address _addr) isRegister((_addr)) public view returns(uint256) {
        return profileMapping[_addr].siaHashOfMedia.length;
    }
    
    function isRegisterUser(address _addr) public view returns(bool) {
        return profileMapping[_addr].isRegister;
    } 
    
    function getFileName(address _addr, string memory siaHash) public view returns(string memory) {
        return (
            profileMapping[_addr].fileName[siaHash]
        );
    }
}