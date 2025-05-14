const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');



const detectRoutes = require('./src/routes/detect');
const emailRoutes = require('./src/routes/email');

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.use('/detect', detectRoutes);
app.use('/update-alert-email', emailRoutes);



const Cap = require('cap').Cap;
const decoders = require('cap').decoders;
const PROTOCOL = decoders.PROTOCOL;

const c = new Cap();
const device = Cap.findDevice('192.168.96.190');
const buffer = Buffer.alloc(65535);

const linkType = c.open(device, '', 10 * 1024 * 1024, buffer);

c.setMinBytes && c.setMinBytes(0);

const required_features = [
    'Destination Port', 'Flow Duration', 'Total Fwd Packets', 'Total Backward Packets',
    'Total Length of Fwd Packets', 'Total Length of Bwd Packets', 'Fwd Packet Length Max',
    'Fwd Packet Length Min', 'Fwd Packet Length Mean', 'Fwd Packet Length Std',
    'Bwd Packet Length Max', 'Bwd Packet Length Min', 'Bwd Packet Length Mean',
    'Bwd Packet Length Std', 'Flow Bytes/s', 'Flow Packets/s', 'Flow IAT Mean',
    'Flow IAT Std', 'Flow IAT Max', 'Flow IAT Min', 'Fwd IAT Total', 'Fwd IAT Mean',
    'Fwd IAT Std', 'Fwd IAT Max', 'Fwd IAT Min', 'Bwd IAT Total', 'Bwd IAT Mean',
    'Bwd IAT Std', 'Bwd IAT Max', 'Bwd IAT Min', 'Fwd PSH Flags', 'Bwd PSH Flags',
    'Fwd URG Flags', 'Bwd URG Flags', 'Fwd Header Length', 'Bwd Header Length',
    'Fwd Packets/s', 'Bwd Packets/s', 'Min Packet Length', 'Max Packet Length',
    'Packet Length Mean', 'Packet Length Std', 'Packet Length Variance', 'FIN Flag Count',
    'SYN Flag Count', 'RST Flag Count', 'PSH Flag Count', 'ACK Flag Count', 'URG Flag Count',
    'CWE Flag Count', 'ECE Flag Count', 'Down/Up Ratio', 'Average Packet Size',
    'Avg Fwd Segment Size', 'Avg Bwd Segment Size', 'Fwd Header Length.1',
    'Fwd Avg Bytes/Bulk', 'Fwd Avg Packets/Bulk', 'Fwd Avg Bulk Rate',
    'Bwd Avg Bytes/Bulk', 'Bwd Avg Packets/Bulk', 'Bwd Avg Bulk Rate',
    'Subflow Fwd Packets', 'Subflow Fwd Bytes', 'Subflow Bwd Packets', 'Subflow Bwd Bytes',
    'Init_Win_bytes_forward', 'Init_Win_bytes_backward', 'act_data_pkt_fwd',
    'min_seg_size_forward', 'Active Mean', 'Active Std', 'Active Max', 'Active Min',
    'Idle Mean', 'Idle Std', 'Idle Max', 'Idle Min'
];

const stats = {
    minPacketLength: Number.MAX_SAFE_INTEGER,
    maxPacketLength: Number.MIN_SAFE_INTEGER,
    sumPacketLength: 0,
    packetCount: 0,
};




c.on('packet', (nbytes, trunc) => {
  //  console.log(`Packet: length ${nbytes} bytes`);
    const ret = decoders.Ethernet(buffer);
    if (ret.info.type === PROTOCOL.ETHERNET.IPV4) {


        // Add Packet Length feature


        // Update min, max, std for Packet Length
        stats.minPacketLength = Math.min(stats.minPacketLength, nbytes);
        stats.maxPacketLength = Math.max(stats.maxPacketLength, nbytes);
        stats.sumPacketLength += nbytes;
        stats.packetCount++;

        // Calculate mean
        const mean = stats.sumPacketLength / stats.packetCount;
        const variance = (nbytes - mean) ** 2;
        const std = Math.sqrt(variance);



        const feature_data = {
         'Destination Port': 80,
         'Flow Duration': 60,
         'Total Fwd Packets': 0,
         'Total Backward Packets': 0,
         'Total Length of Fwd Packets': 0,
         'Total Length of Bwd Packets': 0,
         'Fwd Packet Length Max': stats.maxPacketLength,
         'Fwd Packet Length Min': stats.minPacketLength,
         'Fwd Packet Length Mean': mean,
         'Fwd Packet Length Std': std,
         'Bwd Packet Length Max': 0,
         'Bwd Packet Length Min': 0,
         'Bwd Packet Length Mean': 100,
         'Bwd Packet Length Std': 10,
         'Flow Bytes/s': 0,
         'Flow Packets/s': 0,
         'Flow IAT Mean': 50,
         'Flow IAT Std': 10,
         'Flow IAT Max': 200,
         'Flow IAT Min': 10,
         'Fwd IAT Total': 0,
         'Fwd IAT Mean': 30,
         'Fwd IAT Std': 5,
         'Fwd IAT Max': 100,
         'Fwd IAT Min': 5,
         'Bwd IAT Total': 0,
         'Bwd IAT Mean': 30,
         'Bwd IAT Std': 5,
         'Bwd IAT Max': 100,
         'Bwd IAT Min': 5,
         'Fwd PSH Flags': 0,
         'Bwd PSH Flags': 0,
         'Fwd URG Flags': 0,
         'Bwd URG Flags': 0,
         'Fwd Header Length': 20,
         'Bwd Header Length': 20,
         'Fwd Packets/s': 0,
         'Bwd Packets/s': 0,
         'Min Packet Length': 20,
         'Max Packet Length': 1500,
         'Packet Length Mean': 500,
         'Packet Length Std': 50,
         'Packet Length Variance': 2500,
         'FIN Flag Count': 0,
         'SYN Flag Count': 0,
         'RST Flag Count': 0,
         'PSH Flag Count': 0,
         'ACK Flag Count': 0,
         'URG Flag Count': 0,
         'CWE Flag Count': 0,
         'ECE Flag Count': 0,
         'Down/Up Ratio': 1,
         'Average Packet Size': 512,
         'Avg Fwd Segment Size': 1000,
         'Avg Bwd Segment Size': 1000,
         'Fwd Header Length.1': 20,
         'Fwd Avg Bytes/Bulk': 512,
         'Fwd Avg Packets/Bulk': 10,
         'Fwd Avg Bulk Rate': 50,
         'Bwd Avg Bytes/Bulk': 512,
         'Bwd Avg Packets/Bulk': 10,
         'Bwd Avg Bulk Rate': 50,
         'Subflow Fwd Packets': 0,
         'Subflow Fwd Bytes': 0,
         'Subflow Bwd Packets': 0,
         'Subflow Bwd Bytes': 0,
         'Init_Win_bytes_forward': 65535,
         'Init_Win_bytes_backward': 65535,
         'act_data_pkt_fwd': 0,
         'min_seg_size_forward': 8,
         'Active Mean': 30,
         'Active Std': 5,
         'Active Max': 100,
         'Active Min': 5,
         'Idle Mean': 30,
         'Idle Std': 5,
         'Idle Max': 100,
         'Idle Min': 5
      };

       //console.log('Processed IPv4 packet with updated statistics:', feature_data);

        const axios = require('axios');
        axios.post('http://127.0.0.1:3000/detect', feature_data)
            .then(response => {
             // console.log('Data sent successfully:', response.data);
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
    }
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
