import React from 'react';
import Head from 'next/head';
import isValidDomain from 'is-valid-domain';

import Table from '../components/table';

const TABLE_ENTRIES = [
  ["100", "Continue", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100"],
  ["101", "Switching Protocols", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101"],
  ["103", "Early Hints", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103"],
  ["200", "OK", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200"],
  ["201", "Created", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201"],
  ["202", "Accepted", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202"],
  ["203", "Non-Authoritative Information", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203"],
  ["204", "No Content", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204"],
  ["205", "Reset Content", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205"],
  ["206", "Partial Content", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206"],
  ["300", "Multiple Choices", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300"],
  ["301", "Moved Permanently", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301"],
  ["302", "Found", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302"],
  ["303", "See Other", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303"],
  ["304", "Not Modified", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304"],
  ["307", "Temporary Redirect", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307"],
  ["308", "Permanent Redirect", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308"],
  ["400", "Bad Request", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400"],
  ["401", "Unauthorized", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401"],
  ["402", "Payment Required", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402"],
  ["403", "Forbidden", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"],
  ["404", "Not Found", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404"],
  ["405", "Method Not Allowed", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405"],
  ["406", "Not Acceptable", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406"],
  ["407", "Proxy Authentication Required", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407"],
  ["408", "Request Timeout", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408"],
  ["409", "Conflict", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409"],
  ["410", "Gone", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410"],
  ["411", "Length Required", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411"],
  ["412", "Precondition Failed", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412"],
  ["413", "Payload Too Large", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413"],
  ["414", "URI Too Long", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414"],
  ["415", "Unsupported Media Type", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415"],
  ["416", "Range Not Satisfiable", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416"],
  ["417", "Expectation Failed", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417"],
  ["418", "I'm a teapot", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418"],
  ["422", "Unprocessable Entity", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422"],
  ["425", "Too Early", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425"],
  ["426", "Upgrade Required", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426"],
  ["428", "Precondition Required", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428"],
  ["429", "Too Many Requests", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429"],
  ["431", "Request Header Fields Too Large", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431"],
  ["451", "Unavailable For Legal Reasons", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451"],
  ["500", "Internal Server Error", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500"],
  ["501", "Not Implemented", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501"],
  ["502", "Bad Gateway", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502"],
  ["503", "Service Unavailable", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503"],
  ["504", "Gateway Timeout", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504"],
  ["505", "HTTP Version Not Supported", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505"],
  ["506", "Variant Also Negotiates", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506"],
  ["507", "Insufficient Storage", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507"],
  ["508", "Loop Detected", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508"],
  ["510", "Not Extended", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510"],
  ["511", "Network Authentication Required", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511"]
];

function HttpStatusCodes() {
  return (
    <>
      <Head>
        <title>HTTP Status Codes - Fawkes</title>
      </Head>
      <div className="text-center mb-4">HTTP Status Codes</div>
      <div className="max-w-6xl mx-auto">
        <Table
          headings={['Code', 'Name', 'Details link']}
          entries={TABLE_ENTRIES}
        />
      </div>
    </>
  );
}

export default HttpStatusCodes;
