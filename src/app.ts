import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname+'/../.env' });
import { MxService } from './mx-service';

const app = express();
const port = 3000;
const mxService = new MxService;

app.get('/approva/mx-widget-url/:guid', async (req, res) => {
  if(!req.params.guid) {
    res.send("Please provide Mx User Id Param.");
  }
  
  let data = {
      color_scheme: "light",
      disable_institution_search: false,
      include_transactions: true,
      is_mobile_webview: true,
      mode: "aggregation",
      ui_message_version: 4,
      widget_type: "connect_widget"
  }
  try {
    const result = await mxService.createWidgetUrl(req.params.guid, data);
    return res.send(result.data);
  } catch(error: any){
    return res.send({'error': error.message});
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
