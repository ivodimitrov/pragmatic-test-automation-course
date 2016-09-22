$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("fundtransfer.feature");
formatter.feature({
  "line": 1,
  "name": "Customer Transfer\u0027s Fund",
  "description": "     As a customer,\r\n     I want to transfer funds \r\n     so that I can send money to my friends and family",
  "id": "customer-transfer\u0027s-fund",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2040000660,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Valid Payee",
  "description": "",
  "id": "customer-transfer\u0027s-fund;valid-payee",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "he enters \"Jim\" as payee name",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "he enters \"100\" as amount",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "ensure the fund transfer is complete with \"$100 transferred successfully to Jim!!\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDefs.the_user_is_on_Fund_Transfer_Page()"
});
formatter.result({
  "duration": 2064477091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jim",
      "offset": 11
    }
  ],
  "location": "FundTransferStepDefs.he_enters_as_payee_name(String)"
});
formatter.result({
  "duration": 119957358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 11
    }
  ],
  "location": "FundTransferStepDefs.he_enters_as_amount(String)"
});
formatter.result({
  "duration": 93649167,
  "status": "passed"
});
formatter.match({
  "location": "FundTransferStepDefs.he_Submits_request_for_Fund_Transfer()"
});
formatter.result({
  "duration": 71155321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100 transferred successfully to Jim!!",
      "offset": 43
    }
  ],
  "location": "FundTransferStepDefs.ensure_the_fund_transfer_is_complete_with_message(String)"
});
formatter.result({
  "duration": 58387434,
  "status": "passed"
});
formatter.after({
  "duration": 1068241014,
  "status": "passed"
});
formatter.before({
  "duration": 1058980023,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Invalid Payee",
  "description": "",
  "id": "customer-transfer\u0027s-fund;invalid-payee",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "he enters \"John\" as payee name",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "he enters \"100\" as amount",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "ensure a transaction failure message \"Transfer failed!! \u0027John\u0027 is not approved. Please contact your branch\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDefs.the_user_is_on_Fund_Transfer_Page()"
});
formatter.result({
  "duration": 1939136007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 11
    }
  ],
  "location": "FundTransferStepDefs.he_enters_as_payee_name(String)"
});
formatter.result({
  "duration": 157012030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 11
    }
  ],
  "location": "FundTransferStepDefs.he_enters_as_amount(String)"
});
formatter.result({
  "duration": 88817869,
  "status": "passed"
});
formatter.match({
  "location": "FundTransferStepDefs.he_Submits_request_for_Fund_Transfer()"
});
formatter.result({
  "duration": 70077238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transfer failed!! \u0027John\u0027 is not approved. Please contact your branch",
      "offset": 38
    }
  ],
  "location": "FundTransferStepDefs.ensure_a_transaction_failure_message_is_displayed(String)"
});
formatter.result({
  "duration": 54607448,
  "status": "passed"
});
formatter.after({
  "duration": 892010443,
  "status": "passed"
});
formatter.before({
  "duration": 1072648842,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Account is overdrawn past the overdraft limit",
  "description": "",
  "id": "customer-transfer\u0027s-fund;account-is-overdrawn-past-the-overdraft-limit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "he enters \"Tim\" as payee name",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "he enters \"1000000\" as amount",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "ensure a transaction failure message \"Transfer failed!! account cannot be overdrawn\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDefs.the_user_is_on_Fund_Transfer_Page()"
});
formatter.result({
  "duration": 2139930915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tim",
      "offset": 11
    }
  ],
  "location": "FundTransferStepDefs.he_enters_as_payee_name(String)"
});
formatter.result({
  "duration": 154675587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000000",
      "offset": 11
    }
  ],
  "location": "FundTransferStepDefs.he_enters_as_amount(String)"
});
formatter.result({
  "duration": 110916358,
  "status": "passed"
});
formatter.match({
  "location": "FundTransferStepDefs.he_Submits_request_for_Fund_Transfer()"
});
formatter.result({
  "duration": 73097301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transfer failed!! account cannot be overdrawn",
      "offset": 38
    }
  ],
  "location": "FundTransferStepDefs.ensure_a_transaction_failure_message_is_displayed(String)"
});
formatter.result({
  "duration": 53312051,
  "status": "passed"
});
formatter.after({
  "duration": 891024728,
  "status": "passed"
});
formatter.before({
  "duration": 1056837243,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Neshto drugo ime na test case-a",
  "description": "",
  "id": "customer-transfer\u0027s-fund;neshto-drugo-ime-na-test-case-a",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "he enters \"Tim\" as payee name",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "he enters \"2001\" as amount",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "ensure a transaction failure message \"Transfer failed!! account cannot be overdrawn\" is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDefs.the_user_is_on_Fund_Transfer_Page()"
});
formatter.result({
  "duration": 3256812879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tim",
      "offset": 11
    }
  ],
  "location": "FundTransferStepDefs.he_enters_as_payee_name(String)"
});
formatter.result({
  "duration": 155673796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2001",
      "offset": 11
    }
  ],
  "location": "FundTransferStepDefs.he_enters_as_amount(String)"
});
formatter.result({
  "duration": 90875421,
  "status": "passed"
});
formatter.match({
  "location": "FundTransferStepDefs.he_Submits_request_for_Fund_Transfer()"
});
formatter.result({
  "duration": 71960315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transfer failed!! account cannot be overdrawn",
      "offset": 38
    }
  ],
  "location": "FundTransferStepDefs.ensure_a_transaction_failure_message_is_displayed(String)"
});
formatter.result({
  "duration": 50071106,
  "status": "passed"
});
formatter.after({
  "duration": 908001872,
  "status": "passed"
});
formatter.before({
  "duration": 1053925167,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "datadriven negative",
  "description": "",
  "id": "customer-transfer\u0027s-fund;datadriven-negative;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "he enters \"John\" as payee name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "he enters \"100000\" as amount",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "ensure a transaction failure message \"Transfer failed!! \u0027John\u0027 is not approved. Please contact your branch\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDefs.the_user_is_on_Fund_Transfer_Page()"
});
formatter.result({
  "duration": 1919410106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 11
    }
  ],
  "location": "FundTransferStepDefs.he_enters_as_payee_name(String)"
});
formatter.result({
  "duration": 152848288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 11
    }
  ],
  "location": "FundTransferStepDefs.he_enters_as_amount(String)"
});
formatter.result({
  "duration": 96310017,
  "status": "passed"
});
formatter.match({
  "location": "FundTransferStepDefs.he_Submits_request_for_Fund_Transfer()"
});
formatter.result({
  "duration": 65719833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transfer failed!! \u0027John\u0027 is not approved. Please contact your branch",
      "offset": 38
    }
  ],
  "location": "FundTransferStepDefs.ensure_a_transaction_failure_message_is_displayed(String)"
});
formatter.result({
  "duration": 70606908,
  "status": "passed"
});
formatter.after({
  "duration": 905412418,
  "status": "passed"
});
formatter.before({
  "duration": 1065869765,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "datadriven negative",
  "description": "",
  "id": "customer-transfer\u0027s-fund;datadriven-negative;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "the user is on Fund Transfer Page",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "he enters \"Tim\" as payee name",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "he enters \"2001\" as amount",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "he Submits request for Fund Transfer",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "ensure a transaction failure message \"Transfer failed!! account cannot be overdrawn\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "FundTransferStepDefs.the_user_is_on_Fund_Transfer_Page()"
});
formatter.result({
  "duration": 3180109173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tim",
      "offset": 11
    }
  ],
  "location": "FundTransferStepDefs.he_enters_as_payee_name(String)"
});
formatter.result({
  "duration": 158246293,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2001",
      "offset": 11
    }
  ],
  "location": "FundTransferStepDefs.he_enters_as_amount(String)"
});
formatter.result({
  "duration": 90964666,
  "status": "passed"
});
formatter.match({
  "location": "FundTransferStepDefs.he_Submits_request_for_Fund_Transfer()"
});
formatter.result({
  "duration": 70279378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transfer failed!! account cannot be overdrawn",
      "offset": 38
    }
  ],
  "location": "FundTransferStepDefs.ensure_a_transaction_failure_message_is_displayed(String)"
});
formatter.result({
  "duration": 52205855,
  "status": "passed"
});
formatter.after({
  "duration": 896700287,
  "status": "passed"
});
});