import nodemailer, { Transporter, SendMailOptions } from "nodemailer";

export default class NodemailerSend {
    private static _instance: NodemailerSend;

    private readonly transporter: Transporter;

    private constructor(
        host: string,
        port: number,
        secure: boolean,
        userName: string,
        password: string,
        fromName: string,
        fromEmail: string
    ) {
        // create reusable transporter object using the default SMTP transport
        this.transporter = nodemailer.createTransport(
            {
                host,
                port,
                secure, // true for 465, false for other ports
                from: `${fromName}<${fromEmail}>`,
                auth: {
                    user: userName,
                    pass: password,
                },
            },
        );
    }

    public sendMail(mailOptions: SendMailOptions): Promise<string> {
        return this.transporter.sendMail(mailOptions);
    }

    public static getInstance(
        host: string,
        port: number,
        secure: boolean,
        userName: string,
        password: string,
        fromName: string,
        fromEmail: string
    ): NodemailerSend {
        if (!NodemailerSend._instance) {
            NodemailerSend._instance = new NodemailerSend(
                host,
                port,
                secure,
                userName,
                password,
                fromName,
                fromEmail,
            );
        }

        return NodemailerSend._instance;
    }
}
