import { Readable } from "stream";

export interface AttachmentLike {
    /** String, Buffer or a Stream contents for the attachmentent */
    content?: string | Buffer | Readable | undefined;
    /** path to a file or an URL (data uris are allowed as well) if you want to stream the file instead of including it (better for larger attachments) */
    path?: string | undefined;
}