//var ConvertLib = artifacts.require("./ConvertLib.sol");
var VegaCoin = artifacts.require("./VegaCoinCrowdsale.sol");

module.exports = function(deployer) {
  //deployer.deploy(ConvertLib);
  //deployer.link(ConvertLib, ClickCoin);
  deployer.deploy(VegaCoin);
};
