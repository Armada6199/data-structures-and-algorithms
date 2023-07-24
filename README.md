# Amazon S3 Overview

## Buckets
- Data is organized into "buckets," which act like directories or folders to store files.
- Bucket names must be globally unique across all of AWS.

## Objects
- Files uploaded to S3 are called "objects."
- Each object consists of data, metadata, and a unique identifier.

## Regions
- S3 operates in different AWS regions, allowing you to choose the region for your S3 bucket.
- Each region is a separate geographic location with its own infrastructure.

## Access Control
- S3 provides fine-grained access control through IAM to manage data access.
- You can configure access policies and permissions.

## Data Consistency
- S3 offers strong read-after-write consistency for all objects by default in all regions.
- Immediately read data after writing, avoiding stale data risks.

## Storage Classes
- S3 provides various storage classes for different use cases:
  - Standard: For frequently accessed data.
  - Intelligent-Tiering: Automatically moves objects between Standard and Archive tiers to optimize costs based on usage patterns.
  - Glacier: For long-term archival storage with lower costs and higher retrieval times.
  - Deep Archive: For rarely accessed data with the lowest storage costs and higher retrieval times.

## Versioning
- Enable versioning on a bucket to preserve all object versions, protecting against accidental data loss or overwrites.

## Encryption
- S3 offers both server-side and client-side encryption for data security and privacy compliance.

## Static Website Hosting
- Use S3 to host static websites by making bucket content publicly accessible.

## Testing and Uploading Files
- Test and upload files to S3 using AWS Management Console, AWS CLI, or AWS SDKs in various programming languages.
