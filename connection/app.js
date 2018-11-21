const contract = require('truffle-contract');

const clickcoin_artifact = require('../build/contracts/VegaCoinCrowdsale.json');
var ClickCoin = contract(clickcoin_artifact);
const config = require('../modules/constants');
var Web3 = require('web3');
const Member = require('../models/Member');
const moment = require('moment');
var waterfall = require('async-waterfall');
var async = require('async');

module.exports = {
    
    getCKCBalance: function (req,callback) {
       
        var web3 = new Web3(config.INFURA_ENDPOINT + config.INFURA_KEY);
        var contractInstance = new web3.eth.Contract(clickcoin_artifact.abi, config.CONTRACT_ADDRESS);
        contractInstance.methods.currentRoundCondition().call(function(err,res) {
           console.log("hgdhhh",res);
        });
        var wallet = contractInstance.methods.balanceOf(req.au).call()
                .then(function (data) {
                    callback(null, data.valueOf());
                })
                .catch(function (err) {
                    console.log(err);
                    callback(err, err);
                });
    },

    getDashDet: function (req,callback) {
        console.log("reached getdashdet at app.js");
        
        var web3 = new Web3(config.INFURA_ENDPOINT + config.INFURA_KEY);
        var contractInstance = new web3.eth.Contract(clickcoin_artifact.abi, config.CONTRACT_ADDRESS);
       
        async.parallel([

            function (function1Callback) {
                contractInstance.methods.sCap().call(function(err,sCap) {
                    
                    function1Callback(null, sCap);
                });
            },
            function (function2Callback) {
                contractInstance.methods.hCap().call(function(err,hCap) {
                    
                    function2Callback(null, hCap);
                });
            },
            
            function (function3Callback) {
                contractInstance.methods.ICO_SUPPLY().call(function(err,ICOSupply) {
                   
                    function3Callback(null, ICOSupply);
                });
            },
            function (function4Callback) {
                contractInstance.methods.currentAAAPerEther().call(function(err,currentAAAPerEther) {
                    
                    function4Callback(null, currentAAAPerEther);
                });
            },
           
            function (function5Callback) {
                contractInstance.methods.StartDate().call(function(err,StartDate) {
                    
                    function5Callback(null, StartDate);
                });
            },
            function (function6Callback) {
                contractInstance.methods.EndDate().call(function(err,EndDate) {
                    
                    function6Callback(null, EndDate);
                });
            },
            function (function7Callback) {

                Member.findOne({_id:req.authenticationId._id}, function (error1,Memberfound) {
                    if (Memberfound) {
                        Memberfound = Memberfound.toObject();
                        //console.log("abcd",Memberfound.publicWalletAddress);
                        
                        contractInstance.methods.balanceOf(Memberfound.publicWalletAddress).call(function(err,balance) {
                            function7Callback(null, balance);
                        });
            
                    } else {
                        callback(error1, {});
                    }
                // contractInstance.methods.balanceOf(req.authenticationId.publicWalletAddress).call(function(err,balance) {

                //     function7Callback(null, balance);
                });
            },


            
                function (function8Callback) {

                 //  contractInstance.methods.setCrowdsaleStage(1);

                    contractInstance.methods.currentRoundNumber().call(function(err,rnum) {
                        // contractInstance.methods.setCrowdsaleStage(1);

                        function8Callback(null, rnum);
                      //  console.log("Current Round Number",rnum )
                    });
                },
                function (function9Callback) {
                    contractInstance.methods.currentRoundCondition().call(function(err,EndDate) {
                        
                        function9Callback(null, EndDate);
                    });
                },
            function (function9Callback) {
                req.session.userLogin.publicWalletAddress
               // console.log("FUNC7APP.JS", req.authenticationId.publicWalletAddress)
               // console.log("func9",contractInstance.methods);
                //console.log("FUNC$$$$", contractInstance.methods.rounds(1));
                var roundIndex = config.ROUND_INDEXES;
                var roundDetails = [];
               // console.log("function8",roundIndex);
                
                async.forEach(roundIndex, function(val,callbackS) {
                  //  console.log("function8 inside");
                    contractInstance.methods.rounds(val).call(function(err,roundsDet) {
                        //console.log("FUNC7AP", bonus)
                        var obj = {};
                       // console.log("function8 inside");
                        
                        obj.roundName = roundsDet.roundName;
                        obj.roundStartDate = roundsDet.roundStartDate;
                        obj.roundEndDate = roundsDet.roundEndDate;
                        obj.roundBonus= roundsDet.roundBonus;
                       // console.log("getting round 1 bonus", contractInstance.methods.rounds(1).roundBonus);
                        roundDetails.push(obj);
                        callbackS();
                        
                    })
                }, function(err){
                        if (!err) {
                        //    console.log("rounnnnn",roundDetails)
                            function9Callback(null, roundDetails);
                        }
                    });
            
                }
         
            ], function (error, arrResult) {
          //  console.log(arrResult);
            var sC = arrResult[0];
            var hC = arrResult[1];
            var icosup = arrResult[2] / (config.DECIMALS * 1000000);
            var rate = arrResult[3];
            var sdate = arrResult[4];
            var edate = arrResult[5];
            var bal = arrResult[6];
            var num = arrResult[7];
            var cond = arrResult[8];
            var round = arrResult[9];


            // console.log("arr7",arrResult[7]);
            // console.log("arr8",arrResult[8]);
            // console.log("arr9",arrResult[9]);


            //var tokenSold = arrResult[2];
            //console.log("tokens",tokenSold);
            callback(null, sC,hC,icosup,rate,sdate,edate,bal,num,cond,round);
        }); 
      
    },

    bountyTokens: function (addresses,tokens,callback) {

        console.log("Entered app.js - bountyTokens");
        var web3 = new Web3(config.INFURA_ENDPOINT + config.INFURA_KEY);
        var contractInstance = new web3.eth.Contract(clickcoin_artifact.abi, config.CONTRACT_ADDRESS, {
            from: config.OWNER_ADDRESS
        });
        var txnNonce;
        var txnObject;
        console.log("ddd",addresses);
        console.log("fff",tokens);
       
        web3.eth.getTransactionCount(config.OWNER_ADDRESS,'pending')
        .then(function(data){
          txnNonce = data;
          console.log(txnNonce);
          txnObject = {
            from : config.OWNER_ADDRESS,
            to : config.CONTRACT_ADDRESS,
            value : "0x0",
            gasPrice: web3.utils.toHex(web3.utils.toWei('3', 'Gwei')),
            gas: web3.utils.toHex('3000000'),
            nonce: web3.utils.toHex(txnNonce),
            data: contractInstance.methods.sendBounty(addresses,tokens).encodeABI()
          };
  
          console.log("txnObject",txnObject);
  
          var Tx = require('ethereumjs-tx');
          var privateKey = new Buffer(config.PRIV_KEY, 'hex');
  
          var tx = new Tx(txnObject);
          tx.sign(privateKey);
  
          var serializedTx = tx.serialize();
          console.log(serializedTx);
  
          web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
            .on('receipt', function(receipt){
              console.log("Receipt Called");
              callback(null,"Crowdsale Stage Started");
            
            }).on('error', function(err){
              console.log("Error Called: "+ err);
             // console.log("Error Called: "+ err.Error);
  
              var minedPending = "Be aware that it might still be mined";
              var sourceErr = " " + err + " ";
              if(sourceErr.indexOf(minedPending) !== -1)
              {
                var rtnObj = {
                  "status" : "pending",
                  "data" : err,
                  "errmsg" : "Your transaction is on the Blockchain. Depending on data traffic, it may take anywhere between 5-30 minutes to execute. Kindly check your wallet again in some time to be sure that the transaction was successfully executed."
                  };
  
                callback(err,rtnObj.valueOf());  
              }
              else
              {
                
                callback(err,err);
                
              }
            });
              
            });

    },
}

